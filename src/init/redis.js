import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

export const redisClient = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

redisClient.on('error', (err) => console.error('Redis 클라이언트 오류:', err));

const connectRedis = async () => {
  try {
    if (!redisClient.status || redisClient.status === 'end') {
      await redisClient.connect();
      console.log('Redis에 연결되었습니다.');
    }
  } catch (error) {
    console.error('Redis에 연결할 수 없습니다:', error);
  }
};

await connectRedis();

export const RedisManager = {
  setCache: async (key, value, expiration = 3600) => {
    try {
      await redisClient.set(key, JSON.stringify(value), 'EX', expiration);
      console.log(`캐시 설정 완료: ${key}`);
    } catch (error) {
      console.error('캐시 설정 중 오류 발생:', error);
    }
  },

  getCache: async (key) => {
    try {
      const data = await redisClient.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('캐시 가져오기 중 오류 발생:', error);
      return null;
    }
  },

  deleteCache: async (key) => {
    try {
      await redisClient.del(key);
      console.log(`캐시 삭제 완료: ${key}`);
    } catch (error) {
      console.error('캐시 삭제 중 오류 발생:', error);
    }
  },

  updateCacheExpiration: async (key, expiration) => {
    try {
      await redisClient.expire(key, expiration);
      console.log(`캐시 만료 시간 업데이트 완료: ${key}`);
    } catch (error) {
      console.error('캐시 만료 시간 업데이트 중 오류 발생:', error);
    }
  },

  cacheUserData: async (userId, gold, stage) => {
    try {
      const userKey = `game:user:${userId}`;
      await redisClient.hmset(userKey, { gold, stage });
      console.log(`사용자 데이터 캐시 완료: ${userId}`);
    } catch (error) {
      console.error('사용자 데이터 캐시 중 오류 발생:', error);
    }
  },

  getUserData: async (userId) => {
    try {
      const userKey = `game:user:${userId}`;
      const userData = await redisClient.hgetall(userKey);
      return userData && Object.keys(userData).length ? userData : null;
    } catch (error) {
      console.error('사용자 데이터 가져오기 중 오류 발생:', error);
      return null;
    }
  },

  cacheUserInventory: async (userId, inventory) => {
    try {
      const inventoryKey = `game:user:${userId}`;
      await redisClient.set(inventoryKey, JSON.stringify(inventory));
      console.log(`사용자 인벤토리 캐시 완료: ${userId}`);
    } catch (error) {
      console.error('사용자 인벤토리 캐시 중 오류 발생:', error);
    }
  },

  getUserInventory: async (userId) => {
    try {
      const inventoryKey = `game:user:${userId}`;
      const inventoryData = await redisClient.get(inventoryKey);
      return inventoryData ? JSON.parse(inventoryData) : null;
    } catch (error) {
      console.error('사용자 인벤토리 가져오기 중 오류 발생:', error);
      return null;
    }
  },
};