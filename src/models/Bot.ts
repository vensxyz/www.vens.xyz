// Logger
import { Logger } from "../Logger";

// telebot
import * as TeleBot from "telebot";

// Bot
class Bot {

    public static telebot;
    public static botOwner;

    public constructor() {
    }

    public static init(botToken, botOwner) {
        Logger.INFO("init TeleBot");
        Bot.telebot = new TeleBot(botToken);
        Bot.botOwner = botOwner;
    }

    public static start() {
        Logger.INFO("Starting TeleBot");
        Bot.telebot.start();
        Bot.telebot.sendMessage(Bot.botOwner, "Service started correctly");
    }

    public static notify(message) {
        Logger.INFO("Message received");
        Bot.telebot.sendMessage(Bot.botOwner, message);
        return true;
    }

}

// export
export { Bot };