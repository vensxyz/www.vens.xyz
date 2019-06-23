// import config
import { CONFIG } from "./config";

// import Logger
import { Logger } from "./Logger";

// import Bot
import { Bot } from "./models/Bot";

// import koa
import * as Koa from "koa";
import * as bodyparser from "koa-bodyparser";

// import router
import { websiteRouter } from "./router/Website";

// create new bot
new Bot(CONFIG.BOT_TOKEN, CONFIG.BOT_ADMIN);

// create new koa
const koa = new Koa();

// apply middleware
koa.use(bodyparser());

koa.use(websiteRouter.routes());
koa.use(websiteRouter.allowedMethods());
koa.use(async (context, next) => {
    context.set("Content-Type", "application/json");
    context.status = 404;
    return context.body = JSON.stringify({
        message: "404"
    });
});

koa.listen(CONFIG.PORT, () => {
    Logger.INFO(`Koa server is running [PORT:${CONFIG.PORT}]`);
    Bot.start();
});