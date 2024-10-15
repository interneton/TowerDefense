import { getGameAssets } from '../init/assets.js';
import { clearStage, getStage, setStage } from '../models/stage.model.js';
import { redisClient } from '../init/redis.js';
import { gameDataClient, userDataClient } from '../utils/prisma/index.js';
import { syncTowerStatsToRedis, syncTowersToRedis } from '../models/tower.model.js';
import { spawnMonsters } from '../models/monster.model.js'

export const gameStart = async (uuid, payload, socket) => {
  const { timeStamp } = payload;
  const { initData } = getGameAssets();
  console.log(initData)
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

  const user = await userDataClient.users.findUnique({
    where: {
      id: uuid,
    },
  });

  const towers = await userDataClient.inventory.findMany({
    where: {
      userId: uuid,
    }
  });

  // 저장되어있는 값이 있으면 초기 정보에 덮어 씌우기
  if (user) {
    result.userGold = user.gold;
    result.stage = user.stage
  }

  if (towers) {
    result.towers = towers;
  }

  // TODO: 유저 데이터 저장해두기
  // const data = {};
  // await RedisManager.set(uuid, data);

  // TODO: setStage 필요

  socket.emit('gameStart', result);
};

export const gameEnd = async (uuid, payload) => {
  // TODO: 게임 종료 시 데이터 저장
  // 캐시만 지우고, db에는 초기 데이터로 등록
  const { gold, stage } = payload; // towers, baseHp,

  await userDataClient.users.update({
    where: { id: uuid },
    data: {
      gold: gold,
      stage: stage,
    },
  });

  // 기존 타워와 새로 얻은 타워도 비교해야되는데
  // await userDataClient.inventory.update

  return { status: 'success' };
};
