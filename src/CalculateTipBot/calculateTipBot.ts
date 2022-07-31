import { Bot } from "../shared/types";
import {
  ERROR_MESSAGE,
  FIXED_DECIMAL_AMOUNT,
  RATES,
} from "../shared/constants";
import { calculateTipAmount } from "../shared/utils";
import { CALCULATE_TIP_START_MESSAGE } from "./constants";

export const addCalculateTipBotCommands = (bot: Bot) => {
  bot.start((ctx) => ctx.reply(CALCULATE_TIP_START_MESSAGE));

  bot.on("text", (ctx) => {
    const totalCost = Number(ctx.update.message.text);

    if (!totalCost) {
      return bot.telegram.sendMessage(ctx.chat.id, ERROR_MESSAGE);
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

    bot.telegram.sendMessage(ctx.chat.id, ratesMessage);
  });
};
