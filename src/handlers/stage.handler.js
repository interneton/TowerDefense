import { getUserInfo, updateStage } from '../models/userinfo.model.js';
import { spawnMonsters } from '../models/monster.model.js';

let lastStageMoveTime = 0;
const STAGE_MOVE_DELAY = 2000;

export const moveStageHandler = async (uuid, payload, socket) => {
  let user = await getUserInfo(uuid);
  let { currentStage, targetStage } = payload;

  if (!user)
    return { status: 'fail', message: 'User Not Found' };

  if (!currentStage || !targetStage)
    return { status: 'fail', message: 'Not Exist Stage Info' };

  const now = Date.now();
  if (now - lastStageMoveTime < STAGE_MOVE_DELAY) {
    return { status: 'fail', message: 'Stage move action too fast' };
  }
  lastStageMoveTime = now;

  await updateStage(uuid, targetStage);

  const monsters = await spawnMonsters(uuid);


  setTimeout(async () => {
    socket.emit('moveStage', { message: "스테이지 이동 중...", targetStage, monsters });
  }, 500);

  return { status: 'success', message: '스테이지 이동 완료' };
};
