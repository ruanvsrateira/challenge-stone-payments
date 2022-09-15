import 'dotenv/config'

export const APP_PORT = Number(process.env.APP_PORT);

export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;