import { createStage, getStage, setStage } from '../models/stage.model.js';
import { gameDataClient } from '../utils/prisma/index.js';

export const moveStageHandler = async (uuid, payload) => {
  // 서버에 존재하는 스테이지 정보
  const stages = await gameDataClient.stage.findMany();

  // DB에서 다음 스테이지의 존재 여부 확인
  if (!stages.some((stage) => stage.id === payload.targetStage)) {
    return { status: 'fail', message: 'Target stage does not exist' };
  }

  // 유저의 현재 스테이지 배열을 가져오고, 최대 스테이지 ID를 찾는다.
  const currentStages = await getStage(uuid);

  if (!currentStages) {
    await createStage(uuid);
    currentStage = await getStage(uuid);
  }

  if (!currentStages.length) {
    return { status: 'fail', message: 'No stages found for user' };
  }

  // 오름차순 정렬 후 가장 큰 스테이지 ID 확인 = 가장 상위의 스테이지 = 현재 스테이지
  currentStages.sort((a, b) => a.id - b.id);

  const currentStage = currentStages[currentStages.length - 1];

  // payload 의 currentStage 와 비교
  if (currentStage.id !== payload.currentStage) {
    return { status: 'fail', message: 'Current stage mismatch' };
  }

  // 유저의 다음 스테이지 정보 업데이트
  await setStage(uuid, payload.targetStage);
  socket.emit('stage', { stage: payload.targetStage });
  return {
    status: 'success',
    message: 'move stage',
    handlerId: 11,
    payload: { targetStage: payload.targetStage },
  };

  // await gameDataClient.stage.create({
  //   data: {
  //     totalSpawn: currentStage.totalSpawn + 10,
  //     spawnInterval: currentStage.spawnInterval + 0.2,
  //     spawnGoblin: currentStage.spawnGoblin + 0.1,
  //   },
  // });
  // Socket.emit()
  // 서버에서 클라이언트로 데이터 보냄 -> 스테이지 클리어 -> 클라이언트 (stage + 1) -> 서버로 보냄 (stage + 1) -> 서버가 userData에서 스테이지 정보 변경
};
