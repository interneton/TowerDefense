import { getMonsters } from "../models/monster.model.js"
import { redisClient } from '../init/redis.js';

export const spawnMonsterHandler = (userId, payload, socket) => {
  return null;
};

export const killMonsterHandler = async (uuid, payload, socket) => {
  // payload = {monsters, index} {남은 몬스터, 제거 인덱스}
  // redis에서 몬스터 정보
  const index = payload.spawnId
  const serverMonsters = await getMonsters(uuid);

  const monsterInfo = serverMonsters[index]

  // 남은 몬스터와 몬스터를 서버에서 제거 했을 때 일치하는지 확인
  if(!monsterInfo){
    console.log("존재하지 않는 몬스터")
    return {status:"몬스터 처치 처리 실패"}
  }

  // 받은 인덱스에 몬스터 정보를 없앰.
  serverMonsters.splice(index, 1, 0);

  // redis에 갱신
  await redisClient.set("spawnMonster:"+uuid, JSON.stringify(serverMonsters))

  // client에 돈 획득 이벤트 emit
  socket.emit('getGold', {gold: monsterInfo.gold});

  return {message:"몬스터 처치"};
};
