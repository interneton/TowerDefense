import { gameDataClient, userDataClient } from '../utils/prisma/index.js';
import { RedisManager, redisClient } from '../init/redis.js';

const stages = {};
//redis에 스테이지 정보 동기화
export const syncStageToRedis = async (socket) => {
  try {
    const stages = await gameDataClient.stage.findMany();

    for (const stage of stages) {
      await RedisManager.setCache(`stage:${stage.id}`, stage);
    }

    if (stages.length === 0) {
      console.log('No Stage Data');
      const dbStages = await gameDataClient.stage.findMany({});
      for (const stage of dbStages) {
        await redisClient.set(`stage:${stage.id}`, JSON.stringify(stage));
        stages.push(stage);
      }
    }

    socket.emit('allStagesData', stages);
  } catch (error) {
    console.error('all stages:', error);
    throw error;
  }
};

export const createStage = async (uuid) => {
  stages[uuid] = [];
};

export const clearStage = async (uuid) => {
  return (stages[uuid] = []);
};

export const getStage = async (uuid) => {
  try {
    const cachedStage = await RedisManager.getCache(`stage:${uuid}`);
    if (cachedStage) {
      return cachedStage;
    }
    return null;
  } catch (error) {
    console.error('스테이지 조회 중 오류 발생:', error);
    throw error;
  }
};

// 스테이지 세팅
export const setStage = async (uuid, id) => {
  console.log(stages);
  return stages[uuid].push({ id });
};

// 유저가 종료할 때 스테이지 정보 저장
export const saveStage = async (uuid) => {
  try {
    const currentStage = getStage(uuid);
    await userDataClient.users.update({
      where: {
        id: uuid,
      },
      data: {
        stage: currentStage,
      },
    });
    return;
  } catch (error) {
    console.error('스테이지 저장 중 오류 발생', error);
    throw error;
  }
};
