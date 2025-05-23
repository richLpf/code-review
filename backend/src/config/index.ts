import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

console.log("current environment is", process.env.NODE_ENV, process.env.DOMAIN, process.env.CONSOLE_PORT, process.env.IP)

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { 
    NODE_ENV, PORT, DOMAIN, DB_TYPE, DB_HOST, DB_PORT, DB_USER="root", 
    DB_PASSWORD, DB_DATABASE="ucode_review", 
    LOG_FORMAT, LOG_DIR, ORIGIN, CONSOLE_PORT, IP
} = process.env;