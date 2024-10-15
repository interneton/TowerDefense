import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

export const redisClient = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

redisClient.on('error', (err) => console.error('Redis client error:', err));

const connectRedis = async () => {
  try {
    if (!redisClient.status || redisClient.status === 'end') {
      await redisClient.connect();
      console.log('Connected to Redis');
    }
  } catch (error) {
    console.error('Unable to connect to Redis:', error);
  }
};

await connectRedis();

export const RedisManager = {
  setCache: async (key, value, expiration = 3600) => {
    try {
      await redisClient.set(key, JSON.stringify(value), 'EX', expiration);
      console.log(`Cache set successfully: ${key}`);
    } catch (error) {
      console.error('Error setting cache:', error);
    }
  },

  getCache: async (key) => {
    try {
      const data = await redisClient.get(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting cache:', error);
      return null;
    }
  },

  deleteCache: async (key) => {
    try {
      await redisClient.del(key);
      console.log(`Cache deleted successfully: ${key}`);
    } catch (error) {
      console.error('Error deleting cache:', error);
    }
  },

  updateCacheExpiration: async (key, expiration) => {
    try {
      await redisClient.expire(key, expiration);
      console.log(`Cache expiration updated successfully: ${key}`);
    } catch (error) {
      console.error('Error updating cache expiration:', error);
    }
  },

  cacheUserData: async (userId, gold, stage) => {
    try {
      const userKey = `game:user:${userId}`;
      await redisClient.hmset(userKey, { gold, stage });
      console.log(`User data cached: ${userId}`);
    } catch (error) {
      console.error('Error caching user data:', error);
    }
  },

  getUserData: async (userId) => {
    try {
      const userKey = `game:user:${userId}`;
      const userData = await redisClient.hgetall(userKey);
      return userData && Object.keys(userData).length ? userData : null;
    } catch (error) {
      console.error('Error retrieving user data:', error);
      return null;
    }
  },

  cacheUserInventory: async (userId, inventory) => {
    try {
      const inventoryKey = `game:inventory:${userId}`;
      await redisClient.set(inventoryKey, JSON.stringify(inventory));
      console.log(`User inventory cached: ${userId}`);
    } catch (error) {
      console.error('Error caching user inventory:', error);
    }
  },

  getUserInventory: async (userId) => {
    try {
      const inventoryKey = `game:inventory:${userId}`;
      const inventoryData = await redisClient.get(inventoryKey);
      return inventoryData ? JSON.parse(inventoryData) : null;
    } catch (error) {
      console.error('Error retrieving user inventory:', error);
      return null;
    }
  },
};