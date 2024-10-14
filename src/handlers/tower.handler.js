import { getUserInfo, updateUserInfo } from '../models/userinfo.model.js';
import { addTower, getTower } from '../models/tower.model.js';

export const initTowerHandler = async (userId, payload) => {
    const userInfo = await getUserInfo(userId);
    
    // 페이로드에 있는 타워가 3개인지 검증
    if (!payload.towers || payload.towers.length !== 3) {
        throw new Error('페이로드에는 정확히 3개의 타워가 포함되어야 합니다.');
    }
    
    if (!userInfo.inventory || userInfo.inventory.length === 0) {
        // 인벤토리가 비어있을 경우 3개의 기본 타워 추가
        const defaultTowers = [
            { towerId: 1, level: 1, exp: 0 },
            { towerId: 1, level: 1, exp: 0 },
            { towerId: 1, level: 1, exp: 0 }
        ];
        
        for (const tower of defaultTowers) {
            await updateUserInfo(userId, { ...tower });
        }
    }
    
    return userInfo;
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