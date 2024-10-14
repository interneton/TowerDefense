import express from 'express';
import { createServer } from 'http';
import initSocket from './init/socket.js';
import { loadGameAssets } from './init/assets.js';
import cookieParser from 'cookie-parser';
import ErrorHandlerMiddleware from './middlewares/error-handler.middleware.js';
import { syncTowerStatsToRedis, syncTowersToRedis } from './models/tower.model.js';
import redisClient from './init/redis.js';
import { clearAllTowersFromRedis, clearAllTowerStatsFromRedis } from './models/tower.model.js';

import accountRouter from './routes/account.router.js';

const app = express();
const server = createServer(app);

const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use('/api', [accountRouter]);
app.use(express.urlencoded({ extended: false }));

// 에러 핸들링 미들웨어를 등록합니다.
app.use(ErrorHandlerMiddleware);

await syncTowerStatsToRedis();
await syncTowersToRedis();

initSocket(server);

const serverInstance = server.listen(PORT, async () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);

  try {
    const assets = await loadGameAssets();
    console.log(assets);
    console.log('게임 에셋이 성공적으로 로드되었습니다.');
  } catch (error) {
    console.error('게임 에셋 로드 실패:', error);
  }
});

// 서버 종료 시 처리
process.on('SIGINT', async () => {
  console.log('서버를 종료합니다...');
  await clearAllTowersFromRedis();
  await clearAllTowerStatsFromRedis();
  // Redis 연결 종료
  await redisClient.quit();
  
  // 서버 종료
  serverInstance.close(() => {
    console.log('서버가 정상적으로 종료되었습니다.');
    process.exit(0);
  });
});
