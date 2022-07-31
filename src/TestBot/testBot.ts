import { Bot } from "../shared/types";
import {
  ERROR_MESSAGE,
  FIXED_DECIMAL_AMOUNT,
  RATES,
} from "../shared/constants";
import { calculateTipAmount } from "../shared/utils";
import { TEST_START_MESSAGE } from "./constants";

/**
 * @description This is simply to be used as a playground for testing locally
 * @param bot should be passed to this
 */
export const addTestBotCommands = (bot: Bot) => {
  bot.start((ctx) => ctx.reply(TEST_START_MESSAGE));

  bot.on("text", (ctx) => {
    console.log("Local testing...", ctx);
    const totalCost = Number(ctx.update.message.text);

    if (!totalCost) {
      console.log("Invalid Input", totalCost);
      return ctx.reply(ERROR_MESSAGE);
    }

    let ratesMessage = "";

    RATES.forEach((rate) => {
      const tipAmount = calculateTipAmount({
        totalCost,
        tipPercent: rate.amount,
      });
      const totalAmount = tipAmount + totalCost;

      const tip = tipAmount.toFixed(FIXED_DECIMAL_AMOUNT);
      const total = totalAmount.toFixed(FIXED_DECIMAL_AMOUNT);

      const currentMessage = `${rate.readable} - ${tip} - ${total}`;
      ratesMessage = ratesMessage + `\n${currentMessage}`;
    });

    ctx.reply(ratesMessage);
  });
};
