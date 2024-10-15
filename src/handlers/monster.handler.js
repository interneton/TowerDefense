import { getMonsters } from "../models/monster.model.js"
import redisClient from '../init/redis.js';

export const spawnMonsterHandler = (userId, payload, socket) => {
  return null;
};

export const killMonsterHandler = async (uuid, payload, socket) => {
  // payload = {monsters, index} {남은 몬스터, 제거 인덱스}
  // redis에서 몬스터 정보
  const {monsters, index} = payload
  const severMonsters = await getMonsters(uuid);
  const monsterInfo = severMonsters[index]

  // 받은 인덱스로 제거
  severMonsters.splice(index, 1);

  // 남은 몬스터와 몬스터를 서버에서 제거 했을 때 일치하는지 확인
  if(severMonsters.length != monsters.length){
    console.log("필드에 몬스터 수가 일치 하지 않음.")

    return {status:"fail"}
  }

  // redis에 갱신
  await redisClient.set("spawnMonster:"+uuid, severMonsters)

  // client에 돈 획득 이벤트 emit
  socket.emit('getGold', {gold: monsterInfo.gold});

  return null;
};
