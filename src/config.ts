// import dotenv
import * as dotenv from "dotenv";

// load env vars
dotenv.config();

// define CONFIG variables for code completion
const CONFIG = {
    DEBUG: parseInt(process.env.DEBUG),
    PORT: parseInt(process.env.PORT),
    JSON_LIMIT: process.env.JSON_LIMIT,
    BOT_TOKEN: process.env.BOT_TOKEN,
    BOT_ADMIN: process.env.BOT_ADMIN
};

// export
export { CONFIG };