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

export default redisClient;