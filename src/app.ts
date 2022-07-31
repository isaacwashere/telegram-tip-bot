import { Telegraf } from "telegraf";
import { TEST_BOT_TOKEN, ENVIRONMENT } from "../env";
import { addTestBotCommands } from "./TestBot/testBot";

const testBot = new Telegraf(TEST_BOT_TOKEN);

const startBot = () => {
  if (ENVIRONMENT === "production") {
    console.log("Starting Main Bot...");
  } else {
    console.log("Starting Test Bot...");
    addTestBotCommands(testBot);
    testBot.launch();
  }
};

startBot();
