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
    await redisClient.set(monsters, JSON.stringify(monsterDatas));

    return monsterDatas
}

export const spawnMonsters = async (UUID) => {
    try {
        // 몬스터 데이터 베이스에서 몬스터 종류를 불러옴
        let monsterDatas = await gameDataClient.monsters.findMany({
            include: {
                monsterStat: true
            }
        })

        // 현재 유저의 stage를 가져옴
        const user = await userDataClient.users.findUnique({
            select: {
                userId: UUID
            }
        })
        console.log(userDatas)

        // stage의 정보가 도달 스테이지에 따라 변경되야함.
        const stage = {
            spawnGoblin: 1,
            totalSpawn: 10,
            spawnInterval: 3000,
            limitTime: 1000 * 60
        }

        // stage를 기반으로 몬스터 레벨 스텟을 바꿈
        console.log(monsterDatas)
        monsterDatas = monsterDatas.map(monster => {
            const stat = monster.monsterStat
            const stage = user.stage - 1

            return {
                id: monster.id,
                name: monster.name,
                moveSpeed: monster.moveSpeed,
                hp: monster.hp + stat.hpUp * stage,
                gold: monster.gold + stat.goldUp * stage,
                level : stage
            }
        })

        console.log(monsterDatas)

        // span 해야하는 몬스터의 수 만큼 몬스터 정보를 생성
        const monsters = [];
        const goldGolin = {
            name: "goldGolin",
            moveSpeed: 2,
            hp: 1000,
            gold: 10000
        }

        for(let i=0; i< stage.totalSpawn; i++){
            monsters.push(monsterDatas[Math.floor(Math.random() * monsterDatas.length)])
            if(Math.random < spawnGoblin/100)
                goldGolin[level] = 
                monsters.push(goldGolin)
        }
        // redis에 등장 몬스터 리스트를 저장함.
        await redisClient.set(UUID, monsters);

        return monsters

    } catch (error) {
        console.log('몬스터 생성 오류 : ',err)
        throw error;
    }

};


export const getMonsters = async (UUID) => {
    try {
        const cachedMonsters = await redisClient.get(UUID);

        if (cachedMonsters) {
            return cachedMonsters
        }

        return null;
    } catch (error) {
        console.error('몬스터 리스트 조회 오류:', error);
        throw error;
    }
};