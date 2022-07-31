import { Context, Telegraf } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";

export type Bot = Telegraf<Context<Update>>;

export interface Rate {
  amount: number;
  readable: string;
}
