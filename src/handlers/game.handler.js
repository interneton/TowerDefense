import { getGameAssets } from '../init/assets.js';
import { clearStage, getStage, setStage } from '../models/stage.model.js';
import RedisManager from '../init/redis.js';

export const gameStart = async (uuid, payload, socket) => {
  const { timeStamp } = payload;
  const { initData } = getGameAssets();
  const { userGold, baseHp } = initData.data;

  if (!timeStamp) {
    throw new CustomError('게임 초기 정보 검증 실패', 'gameStart');
  }

  const user = await RedisManager.getCache(uuid);
  // NOTE: 유저 정보가 없을 때만 초기 정보 넘기기
  const result = {
    status: 'success',
    message: '게임 시작!',
    userGold,
    baseHp,
    numOfInitialTowers: 3,
    monsterSpawnInterval: 3000,
  };

  // 저장되어있는 값이 있으면 초기 정보에 덮어 씌우기
  if (user) {
    result.userGold = user.userGold;
    result.baseHp = user.baseHP;
    result.numOfInitialTowers = user.numOfInitialTowers;
  }

  // TODO: 유저 데이터 저장해두기
  const data = {};
  await RedisManager.setCache(uuid, data);

  // TODO: setStage 필요

  socket.emit('gameStart', result);
};

export const gameEnd = (uuid, payload) => {
  // TODO: 게임 종료 시 데이터 저장
  return { status: 'success' };
};
