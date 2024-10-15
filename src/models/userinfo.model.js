import { userDataClient } from '../utils/prisma/index.js';
import { RedisManager } from '../init/redis.js';
import { getGameAssets } from '../init/assets.js';
export const addUserInfo = async (uuid) => {
  try {
    let user = await userDataClient.users.findUnique({
      where: {
        id: uuid,
      },
      include: {
        inventory: true,
      },
    });
    const { initData } = await getGameAssets();

    user.baseHp = initData.data.baseHp;
    // Redis에 사용자 정보 저장
    await RedisManager.setCache(uuid, JSON.stringify(user));
    return user;
  } catch (error) {
    console.error('사용자 정보 추가 중 오류 발생:', error);
    throw error;
  }
};

export const getUserInfo = async (uuid) => {
  // Redis에서 사용자 정보 조회
  const cachedUser = await RedisManager.getCache(uuid);

  if (cachedUser) {
    if (typeof cachedUser == 'string') {
      return JSON.parse(cachedUser);
    }
    return cachedUser;
  }
  return null;
};

export const updateUserGold = async (uuid, gold) => {
  let user = await getUserInfo(uuid);
  user.gold = gold;
  await RedisManager.setCache(uuid, JSON.stringify(user));
  return 'success';
};

export const updateUserInventory = async (uuid, inventory) => {
  let user = await getUserInfo(uuid);
  user.inventory = inventory;
  await RedisManager.setCache(uuid, JSON.stringify(user));
  return 'success';
};

export const updateTower = async (userId, towerId, towerData) => {
  try {
    let user = await getUserInfo(uuid);
    const towerIndex = user.inventory.findIndex((tower) => tower.id === towerId);
    user.inventory[towerIndex] = { ...user.inventory[towerIndex], ...towerData };

    // Redis에 업데이트된 사용자 정보 저장
    await RedisManager.setCache(uuid, JSON.stringify(user));

    return 'success';
  } catch (error) {
    console.error('타워 업데이트 중 오류 발생:', error);
    throw error;
  }
};
