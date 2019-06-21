// Logger
import { Logger } from "../Logger";

// telebot
import * as TeleBot from "telebot";

// Bot
class Bot {

    public static telebot;
    public static botOwner;

    public constructor(botToken, botOwner) {
        Logger.INFO("Creating TeleBot");
        Bot.telebot = new TeleBot(botToken);
        Bot.botOwner = botOwner;
    }

    public static start() {
        Logger.INFO("Starting TeleBot");
        Bot.start();
    }

    public static notify(message) {
        Logger.INFO("Message received");
        Bot.telebot.sendMessage(Bot.botOwner, message);
        return true;
    }

}

// export
export { Bot };