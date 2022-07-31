import { Telegraf } from "telegraf";
import { TEST_BOT_TOKEN, ENVIRONMENT, PROD_BOT_TOKEN } from "../env";
import { addTestBotCommands } from "./TestBot/testBot";
import { addCalculateTipBotCommands } from "./CalculateTipBot/calculateTipBot";

const testBot = new Telegraf(TEST_BOT_TOKEN);
const prodBot = new Telegraf(PROD_BOT_TOKEN);

const startBot = () => {
  if (ENVIRONMENT === "production") {
    addCalculateTipBotCommands(prodBot);
    prodBot.launch();
  } else {
    console.log("Starting Test Bot...");
    addTestBotCommands(testBot);
    testBot.launch();
  }
};

startBot();
