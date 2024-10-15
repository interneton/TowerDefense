import { addUserInfo, getUserInfo, updateUserGold, updateUserInventory } from '../models/userinfo.model.js';
import { addTower, getTower, getTowerStat, updateTower } from '../models/tower.model.js';
import { getExp } from '../models/exp.model.js';

export const initTowerHandler = async (userId, payload) => {
    await addUserInfo(userId);
    let user = await getUserInfo(userId);
    if(user.inventory.length < 3) {
        for(let i = 0; i < 4-user.inventory.length; i++) {
            let randomTowerId = Math.floor(Math.random() * 4) + 6;
            let data = {userId: userId, towerId: randomTowerId, level:1, exp:0};
            user.inventory.push(data);
        }
        await updateUserInventory(userId, user.inventory);
    }
    return {status: 'success', message: '타워 초기화 성공', inventory: user.inventory};
};

export const purchaseTowerHandler = async (userId,payload) => {
    let user = await getUserInfo(userId);
    let tower = await getTower(payload.towerId);
    if(!user || !tower) {
        return {status: 'fail', message: '타워 정보를 찾을 수 없습니다.'};
    }
    if(payload.gold < tower.cost) {
        return {status: 'fail', message: '골드가 부족합니다.'};
    }
    user.gold -= tower.cost;
    let data = {userId: userId, towerId: payload.towerId, level:1, exp:0};
    user.inventory.push(data);
    await updateUserGold(userId, user.gold);
    await updateUserInventory(userId, user.inventory);
    return {status: 'success', message: '타워 구매 성공'};
};

export const upgradeTowerHandler = async (userId, payload) => {
    let user = await getUserInfo(userId);
    let tower = await getTower(payload.towerId);
    let towerStat = await getTowerStat(payload.towerId);
    let exp = await getExp(payload.level+1);
    if (!user || !tower || !towerStat) {
        return {status: 'fail', message: '타워 정보를 찾을 수 없습니다.'};
    }
    if(payload.gold !== user.gold&& payload.exp <= exp.exp) {
        return {status: 'fail', message: '골드가 부족하거나 경험치가 부족합니다.'};
    }
    user.gold -= towerStat.cost;
    
    if(payload.exp >= exp.exp) {
        user.towerLevel += 1;
    }
    // 타워 정보 업데이트
    tower.level += 1;
    tower.damage += towerStat.attackUp;
    tower.attackRange += towerStat.rangeUp;
    tower.attackSpeed -= towerStat.attackSpeedUp;
    if(tower.attackSpeed < 0) {
        tower.attackSpeed = 10;
    }
    await updateUserGold(userId, user.gold);
    await updateTower(payload.towerId, tower);
    
    return {status: 'success', message: '타워 업그레이드 성공'};
};

export const sellTowerHandler = (userId) => { 
    return null;
};