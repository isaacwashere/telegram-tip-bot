require("dotenv").config();

export const TEST_BOT_TOKEN = process.env.TEST_BOT_TOKEN || "";
export const PROD_BOT_TOKEN = process.env.PRODUCTION_BOT_TOKEN || "";

export const ENVIRONMENT = process.env.NODE_ENV;
