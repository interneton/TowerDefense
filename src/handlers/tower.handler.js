import { getUserInfo, updateUserInfo } from '../models/userinfo.model.js';
import { addTower, getTower } from '../models/tower.model.js';

export const initTowerHandler = async (userId, payload) => {
    return null;
};

export const purchaseTowerHandler = (userId) => {
    return null; 
};

export const upgradeTowerHandler = async (userId, payload) => {
    const userInfo = await getUserInfo(userId);
    const towerIndex = userInfo.inventory.findIndex(tower => tower.towerId === payload.towerId);
    if (towerIndex === -1) {
        throw new Error('타워를 찾을 수 없습니다.');
    }
    
    const tower = userInfo.inventory[towerIndex];
    
    // 레벨 업그레이드
    tower.level += 1;
    
    // 경험치 초기화
    tower.exp = 0;
    
    // 업데이트된 타워 정보로 사용자 정보 갱신
    userInfo.inventory[towerIndex] = tower;
    await updateUserInfo(userId, userInfo);
    
    return {
        message: '타워 업그레이드 성공',
        updatedTower: tower
    };
};

export const sellTowerHandler = (userId) => { 
    return null;
};