import Redis from "ioredis";
import { promisify } from "util";

import { REDIS_HOST, REDIS_PASSWORD } from "../settings";

const redisClient = new Redis({
  host: REDIS_HOST,
  password: REDIS_PASSWORD,
});

const getRedis = (value: string) => {
  const syncRedisGet = promisify(redisClient.get).bind(redisClient);
  return syncRedisGet(value);
};

const setRedis = (key: string, value: string) => {
  const syncRedisSet = promisify(redisClient.set).bind(redisClient);
  return syncRedisSet(key, value);
};

export { redisClient, getRedis, setRedis };
