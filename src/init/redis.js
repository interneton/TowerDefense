import redis from 'redis';
import dotenv from 'dotenv';

dotenv.config();

// connect Redis
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`, // 6379
});

redisClient.on('connect', () => {
  console.info('Redis connected!');
});

redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

await redisClient.connect(); // redis v4 연결 (비동기)

await redisClient.set('LeeJungSu', 'G.O.A.T');
await redisClient.set('New', Date.now());

console.log(await redisClient.get('LeeJungSu'));
console.log(await redisClient.get('New'));

export default redisClient;
