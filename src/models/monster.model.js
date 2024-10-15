import { gameDataClient } from '../utils/prisma/index.js';
import { userDataClient } from '../utils/prisma/index.js';
import redisClient from '../init/redis.js';

// redis에 몬스터 정보 업로드
export const initMonsters = async () => {
    const monsterDatas = await gameDataClient.monsters.findMany({
        include: {
            monsterStat: true
        }
    })

    // redis에 올림
    await redisClient.set("monsters", JSON.stringify(monsterDatas));

    return;
}

export const spawnMonsters = async (uuid) => {
    try {
        // 몬스터 데이터 베이스에서 몬스터 종류를 불러옴
        let monsterDatas = JSON.parse(await redisClient.get("monsters"))

        // 현재 유저의 stage를 가져옴
        const user = await userDataClient.users.findUnique({
            where: {
                id: uuid
            },
        });
        const stage = user.stage - 1

        // stage의 정보가 도달 스테이지에 따라 변경되야함.
        const stageInfo = {
            spawnGoblin: 1,
            totalSpawn: 10,
            spawnInterval: 3000,
            limitTime: 1000 * 60
        }

        // stage를 기반으로 몬스터 레벨 스텟을 바꿈
        monsterDatas = monsterDatas.map(monster => {
            const stat = monster.monsterStat

            return {
                id: monster.id,
                name: monster.name,
                moveSpeed: monster.moveSpeed,
                hp: monster.hp + stat.hpUp * stage,
                gold: monster.gold + stat.goldUp * stage,
                level : stage + 1
            }
        })

        // spawn 해야하는 몬스터의 수 만큼 몬스터 정보를 생성
        const monsters = [];
        const goldGolin = {
            name: "goldGolin",
            moveSpeed: 2,
            hp: 1000,
            gold: 10000
        }

        for(let i=0; i< stageInfo.totalSpawn; i++){
            monsters.push(monsterDatas[Math.floor(Math.random() * monsterDatas.length)])
        }
        if(Math.random < stageInfo.spawnGoblin/100){
            goldGolin[level] = stage + 1
            monsters.push(goldGolin)
        }

        // redis에 등장 몬스터 리스트를 저장함.
        await redisClient.set("spawnMonster:"+uuid, JSON.stringify(monsters));
        console.log('등장 몬스터 생성 성공')
        
        return monsters
    } catch (error) {
        console.log('몬스터 생성 오류 : ',error)
        throw error;
    }
};

export const getMonsters = async (uuid) => {
    try {
        const cachedMonsters = JSON.parse(await redisClient.get("spawnMonster:"+uuid));

        if (cachedMonsters) {
            return cachedMonsters
        }

        return null;
    } catch (error) {
        console.error('몬스터 리스트 조회 오류:', error);
        throw error;
    }
};