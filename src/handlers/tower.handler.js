import {
  addUserInfo,
  getUserInfo,
  updateUserGold,
  updateUserInventory,
} from '../models/userinfo.model.js';
import { addTower, getTower, getTowerStat, updateTower } from '../models/tower.model.js';

export const initTowerHandler = async (userId, payload) => {
  let user = await getUserInfo(userId);
  user.inventory = payload.towerInven;

  await updateUserInventory(userId, user.inventory);
  
  return { status: 'success', message: '타워 초기화 성공', inventory: user.inventory };
};

export const purchaseTowerHandler = async (userId,payload) => {
    let user = await getUserInfo(userId);
    let tower = await getTower(payload.towerId);
    if(!user || !tower) {
        return {status: 'fail', message: '타워 정보를 찾을 수 없습니다.'};
    }
    
    if(Number(payload.gold) < tower.cost) {
        console.log(payload.gold);
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
    user.inventory = payload.towerInven;
    user.gold -= payload.towercost;
    await updateUserGold(userId, user.gold);
    await updateUserInventory(userId, user.inventory);
    
    return {status: 'success', message: '타워 업그레이드 성공'};
};

export const sellTowerHandler = (userId) => {
  return null;
};
