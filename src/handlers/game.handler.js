import { getGameAssets } from '../init/assets.js';
import { userDataClient } from '../utils/prisma/index.js';
import { clearStage, getStage, setStage } from '../models/stage.model.js';
import RedisManager from '../init/redis.js';

const setData = async (key, value) => {
  const json = JSON.stringify(value);
  await RedisManager.setCache(key, json);
};

const getData = async (key) => {
  const json = await RedisManager.getCache(key);
  if (!json) {
    return null;
  }

  try {
    return JSON.parse(json);
  } catch (error) {
    console.error(`JSON 파싱 오류: ${error.message}`);
    return null;
  }
};

export const gameStart = async (uuid, payload, socket) => {
  const { timeStamp } = payload;
  const { initData } = getGameAssets();
  const { userGold, baseHp } = initData.data;

  if (!timeStamp) {
    throw new CustomError('게임 초기 정보 검증 실패', 'gameStart');
  }

  // WARN: Redis로 구현
  // const user = await userDataClient.users.findUnique({
  //   where: {
  //     userId: uuid,
  //   },
  // });

  const user = await getData(uuid);
  // NOTE: 유저 정보가 없을 때만 초기 정보 넘기기
  const result = {
    status: 'success',
    message: '게임 시작!',
    userGold,
    baseHp,
    numOfInitialTowers: 3,
    monsterSpawnInterval: 3000,
  };

  // 저장되어있는 값이 있고 유효한 경우에만 초기 정보에 덮어 씌우기
  if (user && typeof user === 'object') {
    result.userGold = user.userGold ?? result.userGold;
    result.baseHp = user.baseHP ?? result.baseHp;
    result.numOfInitialTowers = user.numOfInitialTowers ?? result.numOfInitialTowers;
  }

  // TODO: 유저 데이터 저장해두기
  const data = { ...result };
  await setData(uuid, data);

  socket.emit('gameStart', result);
};

export const gameEnd = (uuid, payload) => {
  // TODO: 게임 종료 시 데이터 저장
  return { status: 'success' };
};
