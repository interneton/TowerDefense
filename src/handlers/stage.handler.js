import { getStage, setStage } from '../models/stage.model.js';
import { getGameAssets } from '../init/assets.js';

export const moveStageHandler = async (uuid, payload) => {
  // 유저의 현재 스테이지 배열을 가져오고, 최대 스테이지 ID를 찾는다.
  let currentStages = getStage(uuid);
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

  // 남은 베이스 체력 검증
  const remainBaseHp = base.hp;
  if (remainBaseHp <= 0) {
    return { status: 'fail', message: 'Invalid elapsed time' };
  }

  // DB에서 다음 스테이지의 존재 여부 확인
  const stages = await gameDataClient.stage.findMany();
  if (!stages.data.some((stage) => stage.id === payload.targetStage)) {
    return { status: 'fail', message: 'Target stage does not exist' };
  }

  // 유저의 다음 스테이지 정보 업데이트 + 현재 시간
  setStage(uuid, payload.targetStage);
  return { status: 'success' };
};
