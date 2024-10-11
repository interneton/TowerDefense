import { getGameAssets } from '../init/assets.js';
import { clearStage, getStage, setStage } from '../models/stage.model.js';

export const gameStart = (uuid, payload, socket) => {
  
  const { timeStamp } = payload;
  const { initData } = getGameAssets();
  console.log(initData);
  const { userGold, baseHp} = initData.data;
  
  if (!timeStamp) {
    throw new CustomError('게임 초기 정보 검증 실패', 'gameStart');
  }
  
  socket.emit('gameStart', {
    status: 'success',
    message: '게임 시작!',
    userGold: userGold,
    baseHp: baseHp,
    numOfInitialTowers: 1,
    monsterSpawnInterval: 3000,
  });
};

export const gameEnd = (uuid, payload) => {
  return null;
};
