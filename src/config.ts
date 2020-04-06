// import dotenv
import * as dotenv from "dotenv";

// load env vars
dotenv.config();

// define CONFIG variables for code completion
const CONFIG = {
    
    SERVER_DEBUG: parseInt(process.env.SERVER_DEBUG),
    SERVER_PORT: parseInt(process.env.SERVER_PORT),

    BODYPARSER_JSON_LIMIT: process.env.BODYPARSER_JSON_LIMIT,
    BOT_TOKEN: process.env.BOT_TOKEN,
    BOT_ADMIN_ID: process.env.BOT_ADMIN_ID

};

// export
export { CONFIG };