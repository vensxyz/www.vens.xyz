// Logger
import { Logger } from "../Logger";

// telebot
import * as TeleBot from "telebot";

// Bot
class Bot {

    public static telebot;
    public static adminId;

    // constructor
    public constructor() {

    }

    public static init(botToken, botAdminId) {
        Logger.INFO("init TeleBot");

        Bot.telebot = new TeleBot(botToken);
        Bot.adminId = botAdminId;
    }
    public static start() {
        Logger.INFO("Starting TeleBot");

        Bot.telebot.start();
        Bot.telebot.sendMessage(Bot.adminId, "Your bot has started up");
    }
    public static notify(message) {
        Logger.INFO("Message received");

        Bot.telebot.sendMessage(Bot.adminId, message);
    }

}

// export
export { Bot };