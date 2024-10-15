import { userDataClient } from '../utils/prisma/index.js';
import redisClient from '../init/redis.js';
import RedisManager from '../init/redis.js';

export const addUserInfo = async (userId) => {
    try {
        let user = await userDataClient.users.findUnique({
            where: {
                userId: userId
            },
            include: {
                inventory: true
            }
        });
        
        const { userId: _, ...userinfos } = user;

        // Redis에 사용자 정보 저장
        await redisClient.set(`user:${userId}`, JSON.stringify(userinfos));
        await RedisManager.set(`user:${userId}`, JSON.stringify(userinfos));

        return userinfos;
    } catch (error) {
        console.error('사용자 정보 추가 중 오류 발생:', error);
        throw error;
    }
};

export const getUserInfo = async (userId) => {
    // Redis에서 사용자 정보 조회
    const cachedUser = await redisClient.get(`user:${userId}`);
    const cachedUser = await RedisManager.getCache(`user:${userId}`);
    if (cachedUser) {
        return JSON.parse(cachedUser);
    }
    return null;
};

export const updateUserInfo = async (userId, data) => {
export const updateUserGold = async (userId, gold) => {
    let user = await getUserInfo(userId);
    if (!user) {
        throw new Error('사용자를 찾을 수 없습니다.');
    }
    
    if (!user.inventory) {
        user.inventory = [];
    }
    
    user.inventory.push(data);
    
    console.log(`사용자 ${userId}의 인벤토리에 새 아이템이 추가되었습니다:`, data);
    user.gold = gold;
    await RedisManager.set(`user:${userId}`, JSON.stringify(user));
    return 'success';
};

export const updateTower = async (userId, towerId, towerData) => {
  try {
    let user = await getUserInfo(userId);
    const towerIndex = user.inventory.findIndex(tower => tower.id === towerId);
    user.inventory[towerIndex] = { ...user.inventory[towerIndex], ...towerData };
    
    // Redis에 업데이트된 사용자 정보 저장
    await redisClient.set(`user:${userId}`, JSON.stringify(user));
    await RedisManager.set(`user:${userId}`, JSON.stringify(user));
    
    return '성공';
};
    return 'success';
  } catch (error) {
    console.error('타워 업데이트 중 오류 발생:', error);
    throw error;
  }
};