import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

// Redis 클라이언트 인스턴스 생성
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

// Redis 연결 이벤트 처리
redisClient.on('error', (err) => console.error('Redis 클라이언트 오류', err));

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Redis에 연결되었습니다');
  } catch (error) {
    console.error('Redis에 연결할 수 없습니다', error);
  }
};

connectRedis();

// RedisManager 객체 정의
const RedisManager = {
  setCache: async (key, value, expiration = 3600) => {
    try {
      await redisClient.set(key, JSON.stringify(value), {
        EX: expiration,
      });
    } catch (error) {
      console.error('캐시 설정 오류', error);
    }
  },

  getCache: async (key) => {
    try {
      const data = await redisClient.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('캐시 가져오기 오류', error);
      return null;
    }
  },

  deleteCache: async (key) => {
    try {
      await redisClient.del(key);
    } catch (error) {
      console.error('캐시 삭제 오류', error);
    }
  },
};

export default RedisManager;