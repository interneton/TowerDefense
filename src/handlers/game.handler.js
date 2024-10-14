import { getGameAssets } from '../init/assets.js';
import { userDataClient } from '../utils/prisma/index.js';
import { clearStage, getStage, setStage } from '../models/stage.model.js';

export const gameStart = async (uuid, payload, socket) => {
  const { timeStamp } = payload;
  const { initData } = getGameAssets();
  const { userGold, baseHp } = initData.data;

  if (!timeStamp) {
    throw new CustomError('게임 초기 정보 검증 실패', 'gameStart');
  }

  // WARN: Redis로 구현
  const user = await userDataClient.users.findUnique({
    where: {
      userId: uuid,
    },
  });

  // NOTE: 유저 정보가 없을 때만 초기 정보 넘기기
  let result = {
    status: 'success',
    message: '게임 시작!',
    userGold,
    baseHp,
    numOfInitialTowers: 3,
    monsterSpawnInterval: 3000,
  };

  // TODO: 회원가입 시 정보 자체는 DB에 있을텐데, 데이터가 있다는 걸 어떻게 알아야 할까
  if (!user) {
  }

  socket.emit('gameStart', result);
};

export const gameEnd = (uuid, payload) => {
  // TODO: 게임 종료 시 데이터 저장
  return { status: 'success' };
};
