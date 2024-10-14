/**
 * 몬스터 데이터 생성을 도움
 * cli를 통해 기능 선택 가능
 */

import { gameDataClient } from '../utils/prisma/index.js';
import readlineSync from 'readline-sync';

class monster {
    constructor(name, moveSpeed, defense, hp, gold) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.defense = defense;
        this.hp = hp;
        this.gold = gold;
    }
}

const monsters = [
    new monster("mon1", 2, 1, 100, 10),
    new monster("mon2", 2, 1, 100, 10),
    new monster("mon3", 2, 1, 100, 10),
    new monster("mon4", 2, 1, 100, 10),
    new monster("mon5", 2, 1, 100, 10)
]

const monstersId = [1,2,3,4,5]

async function createMonster(){
    for (let i = 0; i < monsters.length; i++) {
        console.log(JSON.stringify(monsters[i]))
        await gameDataClient.monsterStat.create({
            data: {
                defenseUp : 1,
                hpUp : 1,
                goldUp : 1,
                spawnGoblinUp : 0,
                monsters: {
                    create: monsters[i]
                }
            }
        })
    }
    console.log("생성 완료")
}

async function deleteAll(){
    await gameDataClient.monsters.deleteMany();
    await gameDataClient.monsterStat.deleteMany();
    console.log("삭제 완료")
}

const select = readlineSync.question("1 : 몬스터 생성, 2 : 몬스터 데이터 전부 삭제")
switch(select){
    case '1' : 
        createMonster() 
        break;
    case '2' : 
        deleteAll()
        break;
    default :
        console.log("유효하지 않은 입력")
}