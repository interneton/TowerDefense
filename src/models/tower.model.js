import { gameDataClient } from '../utils/prisma/index.js';
import redisClient from '../init/redis.js';
import RedisManager from '../init/redis.js';

export const addTower = async (towerData) => {
  try {
    await redisClient.set(`tower:${tower.id}`, JSON.stringify(tower));
    return tower;
    await RedisManager.setCache(`tower:${towerData.id}`, towerData);
    return towerData;
  } catch (error) {
    console.error('타워 추가 중 오류 발생:', error);
    throw error;
  }
};

export const getTower = async (id) => {
  try {
    const cachedTower = await redisClient.get(`tower:${id}`);
    const cachedTower = await RedisManager.getCache(`tower:${id}`);
    if (cachedTower) {
      return JSON.parse(cachedTower);
      return cachedTower;
    }
    return null;
  } catch (error) {
    console.error('타워 조회 중 오류 발생:', error);
    throw error;
  }
};  

export const syncTowersToRedis = async (socket) => {
  try {
    const redisKeys = await redisClient.keys('tower:*');
    const towers = [];
    
    for (const key of redisKeys) {
      const cachedTower = await redisClient.get(key);
      if (cachedTower) {
        towers.push(JSON.parse(cachedTower));
      }
=======


//redis에 타워 정보 동기화
export const syncTowersToRedis = async () => {
  try {
    const towers = await gameDataClient.towers.findMany();

    for (const tower of towers) {
      await RedisManager.setCache(`tower:${tower.id}`, tower);
>>>>>>> KHG
    }

    if (towers.length === 0) {
      console.log("기존에 없어");
      const dbTowers = await gameDataClient.towers.findMany({});
      for (const tower of dbTowers) {
        await redisClient.set(`tower:${tower.id}`, JSON.stringify(tower));
        towers.push(tower);
      }
    }

    socket.emit('allTowersData', towers);

  } catch (error) {
    console.error('all towers:', error);
    // socket.emit('error', { message: '타워 정보 동기화 실패' });
  }
};

//redis에 타워 스탯 업그레이드 정보 동기화
export const syncTowerStatsToRedis = async () => {
  try {
    const towerStats = await gameDataClient.towerStat.findMany({});
    const towerStats = await gameDataClient.towerStat.findMany();

    for (const towerStat of towerStats) {
      const redisKey = `towerStat:${towerStat.towerId}`;
      await redisClient.set(redisKey, JSON.stringify(towerStat));
      await RedisManager.setCache(redisKey, towerStat);
    }
    console.log('모든 타워 스탯 정보가 Redis에 동기화되었습니다.');
  } catch (error) {
    console.error('Redis에 타워 스탯 동기화 중 오류 발생:', error);
    throw error;
  }
};

export const getTowerStat = async (towerId) => {
  try {
    const redisKey = `towerStat:${towerId}`;
    const cachedTowerStat = await redisClient.get(redisKey);
    const cachedTowerStat = await RedisManager.getCache(redisKey);
    
    if (cachedTowerStat) {
      return JSON.parse(cachedTowerStat);
      return cachedTowerStat;
    }
    
    return null;
  } catch (error) {
    console.error('타워 스탯 조회 중 오류 발생:', error);
    throw error;
  }
};

// 서버 종료 시 Redis에서 모든 타워 정보 삭제
export const clearAllTowersFromRedis = async () => {
export const updateTower = async (towerId, towerData) => {
  try {
    const keys = await redisClient.keys('tower:*');
    if (keys.length > 0) {
      await redisClient.del(keys);
      console.log('모든 타워 정보가 Redis에서 삭제되었습니다.');
    }
    const redisKey = `tower:${towerId}`;
    await RedisManager.setCache(redisKey, towerData);
    console.log(`타워 ID ${towerId}의 정보가 Redis에서 업데이트되었습니다.`);
    return '성공';
  } catch (error) {
    console.error('Redis에서 타워 정보 삭제 중 오류 발생:', error);
    console.error('타워 정보 업데이트 중 오류 발생:', error);
    throw error;
  }
};

//서버 종료 시 redis에 있는 모든 타워 스탯 업그레이드 정보 삭제
export const clearAllTowerStatsFromRedis = async () => {
  try {
    const keys = await redisClient.keys('towerStat:*');
    if (keys.length > 0) {
      await redisClient.del(keys);
      console.log('모든 타워 스탯 업그레이드 정보가 Redis에서 삭제되었습니다.');
    }
  } catch (error) { 
    console.error('Redis에서 타워 스탯 업그레이드 정보 삭제 중 오류 발생:', error);
    throw error;
  }
};

};