import { getGameAssets } from '../init/assets.js';
import { clearStage, getStage, setStage } from '../models/stage.model.js';
import { RedisManager } from '../init/redis.js';
import { userDataClient } from '../utils/prisma/index.js';
import { syncTowerStatsToRedis, syncTowersToRedis } from '../models/tower.model.js';
import { spawnMonsters } from '../models/monster.model.js';
import { getUserInfo } from '../models/userinfo.model.js';
import { syncStageToRedis } from '../models/stage.model.js';

export const gameStart = async (uuid, payload, socket) => {
  const { timeStamp } = payload;
  const { initData } = await getGameAssets();
  let user = await getUserInfo(uuid);

  const result = {
    status: 'success',
    message: '게임 시작!',
    userGold: user.gold || initData.data.userGold,
    baseHp: user.baseHp || initData.data.baseHp,
    numOfInitialTowers: 3,
    monsterSpawnInterval: 3000,
    stage: user.stage || 1,
    towers: user.inventory || [],
  };

  if (!timeStamp) {
    throw new CustomError('게임 초기 정보 검증 실패', 'gameStart');
  }

  // redis에 업로드하는 함수들
  const [tower, towerStat, monsters] = await Promise.all([
    syncTowersToRedis(socket),
    syncTowerStatsToRedis(),
    spawnMonsters(uuid),
    syncStageToRedis(),
  ]);
  result['monsters'] = monsters;

  socket.emit('gameStart', result);
};

// TODO: game.js에서 게임 오버 부분에 gameEnd 소켓 보내는 구문 추가 sendEvent(3, {});
export const gameEnd = async (uuid, payload) => {
  const { initData } = await getGameAssets();
  const { userGold } = initData.data[0]; // 골드는 초기값으로
  const { stage } = await RedisManager.getUserData(uuid); // 도달 스테이지를 캐시에서 얻어와서 저장

  // DB에 저장
  await userDataClient.users.update({
    where: { id: uuid },
    data: {
      gold: userGold,
      stage: +stage,
    },
  });

  // 캐시 비우기
  await RedisManager.deleteCache(`game:user:${uuid}`);
  await RedisManager.deleteCache(`game:inventory:${uuid}`);

  return { status: 'success' };
};
