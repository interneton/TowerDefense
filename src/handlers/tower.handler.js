import {
  getUserInfo,
  updateUserGold,
  updateUserInventory,
} from '../models/userinfo.model.js';

export const initTowerHandler = async (userId, payload) => {
  let user = await getUserInfo(userId);
  user.inventory = payload.towerInven;

  await updateUserInventory(userId, user.inventory);
  
  return { status: 'success', message: '타워 초기화 성공', inventory: user.inventory };
};

export const purchaseTowerHandler = async (userId,payload) => {
    let user = await getUserInfo(userId);
    if(!user) {
        return {status: 'fail', message: '사용자 정보를 찾을 수 없습니다.'};
    }
    
    if(user.gold < payload.towerCost) {
        return {status: 'fail', message: '골드가 부족합니다.'};
    }
    user.gold -= payload.towerCost;
    
    user.inventory = payload.towerInven;
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
