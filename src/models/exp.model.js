import { gameDataClient } from "../utils/prisma/index.js";
import RedisManager from "../init/redis.js";

export const asyncExpToRedis = async () => {
    try{
        const exp = await gameDataClient.exp.findMany();
        for(const e of exp) {
            await RedisManager.setCache(`level:${e.level}`, e);
        }
    } catch (error) {
        console.error('Redis에 exp 동기화 중 오류 발생:', error);
        throw error;
    }
}

export const clearAllExpFromRedis = async () => {
    try{
        await RedisManager.deleteCache('level:*');
    } catch (error) {
        console.error('Redis에 exp 삭제 중 오류 발생:', error);
        throw error;
    }
}

export const getExp = async (level) => {
    const cachedExp = await RedisManager.getCache(`level:${level}`);
    if (cachedExp) {
        return cachedExp;
    }
    return null;
}
