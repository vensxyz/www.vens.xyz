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

// init telegram bot
Bot.init(CONFIG.BOT_TOKEN, CONFIG.BOT_ADMIN);

// create new koa
const koa = new Koa();

// apply middleware
koa.use(bodyparser());

// router
koa.use(websiteRouter.routes());
koa.use(websiteRouter.allowedMethods());

// 404 
koa.use(async (context, next) => {
    context.set("Content-Type", "application/json");
    context.status = 404;
    return context.body = JSON.stringify({
        result: "failure",
        erros: ["405"],
        data: []
    });
});

// start
koa.listen(CONFIG.SERVER_PORT, () => {
    Logger.INFO(`Koa server is running [PORT:${CONFIG.SERVER_PORT}]`);
    Bot.start();
});