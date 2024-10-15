import { getGameAssets } from '../init/assets.js';
import { clearStage, getStage, setStage } from '../models/stage.model.js';
import redisClient from '../init/redis.js';
import { gameDataClient, userDataClient } from '../utils/prisma/index.js';
import { spawnMonsters } from '../models/monster.model.js'

export const gameStart = async (uuid, payload, socket) => {
  const { timeStamp } = payload;
  const { initData } = getGameAssets();
  const { userGold, baseHp } = initData.data;
  const result = {
    status: 'success',
    message: '게임 시작!',
    userGold,
    baseHp,
    numOfInitialTowers: 3,
    monsterSpawnInterval: 3000,
  };

  if (!timeStamp) {
    throw new CustomError('게임 초기 정보 검증 실패', 'gameStart');
  }

  // redis에 업로드하는 함수들
  const [monsters] = await Promise.all(
    [
      spawnMonsters(uuid)
  ])
  result["monsters"] = monsters

  const user = await userDataClient.users.findUnique({
    where: {
      userId: uuid,
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
    result.baseHp = user.baseHP;
  }

  // TODO: 유저 데이터 저장해두기
  // const data = {};
  // await RedisManager.setCache(uuid, data);

  // TODO: setStage 필요

  socket.emit('gameStart', result);

  return { status: 'success', result } // 서버에서 참고?
};

export const gameEnd = async (uuid, payload) => {
  // TODO: 게임 종료 시 데이터 저장
  const { gold, stage } = payload;

  await userDataClient.users.update({
    where: { id: uuid },
    data: {
      gold: gold,
      stage: stage,
    },
  });

  return { status: 'success' };
};
