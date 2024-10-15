import { gameDataClient, userDataClient } from '../utils/prisma/index.js';
import { RedisManager, redisClient } from '../init/redis.js';
import { getUserInfo } from '../models/userinfo.model.js';

const stages = {};
//redis에 스테이지 정보 동기화
export const syncStageToRedis = async () => {
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
    const user = await getUserInfo(uuid);
    const cachedStage = user.stage;
    console.log(JSON.stringify(user));

    if (cachedStage.length) {
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
  // await redisClient.set('stage: ' + uuid, JSON.stringify({ id: id }));
  return stages[uuid].push({ id });
};
