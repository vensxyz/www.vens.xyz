// import Logger
import { Logger } from "../Logger";

// import router
import * as Router from "koa-router";

// import Bot
import { Bot } from "../models/Bot";

// new Router
const websiteRouter = new Router();

// define routes
websiteRouter.post("/contact", (context, next) => {
    Logger.INFO(`POST /contact Triggered`);

    let contactName = context.request.body.contactName || "No Name";
    let contactEmail = context.request.body.contactEmail || "No Email";
    let contactPhone = context.request.body.contactPhone || "No Phone Number";
    let contactContent = context.request.body.contactContent || "No Content";

    let message = `Name: ${contactName}\nEmail: ${contactEmail}\nNumber: ${contactPhone}\n${contactContent}`;

    Logger.TRAC(message);
    Bot.notify(message);

    return context.body = {
        result: "success",
        errors: [],
        data: []
    }
});

// export
export { websiteRouter };
