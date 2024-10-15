import { getGameAssets } from '../init/assets.js';
import { clearStage, getStage, setStage } from '../models/stage.model.js';
import { RedisManager } from '../init/redis.js';
import { userDataClient } from '../utils/prisma/index.js';
import { syncTowerStatsToRedis, syncTowersToRedis } from '../models/tower.model.js';
import { spawnMonsters } from '../models/monster.model.js'

export const gameStart = async (uuid, payload, socket) => {
  const { timeStamp } = payload;
  const { initData } = await getGameAssets();
  const { userGold, baseHp } = initData.data[0];
  const result = {
    status: 'success',
    message: '게임 시작!',
    userGold,
    baseHp,
    numOfInitialTowers: 3,
    monsterSpawnInterval: 3000,
    stage: 1,
    towers: [],
  };

  if (!timeStamp) {
    throw new CustomError('게임 초기 정보 검증 실패', 'gameStart');
  }

  // redis에 업로드하는 함수들
  const [tower, towerStat, monsters] = await Promise.all(
    [
      syncTowersToRedis(socket),
      syncTowerStatsToRedis(),
      spawnMonsters(uuid)
  ])
  result["monsters"] = monsters

  let user = await RedisManager.getUserData(uuid);
  if (!user) {
    user = await userDataClient.users.findUnique({
      where: {
        id: uuid,
      },
    });
  }

  let towers = await RedisManager.getUserInventory(uuid);
  if (!towers) {
    towers = await userDataClient.inventory.findMany({
      where: {
        userId: uuid,
      }
    });
  }

  // 저장되어있는 값이 있으면 초기 정보에 덮어 씌우기
  if (user) {
    result.userGold = user.gold;
    result.stage = user.stage
  }

  if (towers) {
    result.towers = towers;
  }

  await RedisManager.cacheUserData(uuid, result.userGold, result.stage)

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
      stage: stage,
    },
  });

  // 캐시 비우기
  await RedisManager.deleteCache(`game:user:${uuid}`);
  await RedisManager.deleteCache(`game:inventory:${uuid}`);

  return { status: 'success' };
};
