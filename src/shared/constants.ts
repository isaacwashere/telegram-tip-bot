import { Rate } from "./types";

export const RATES: Rate[] = [
  { amount: 0.15, readable: "15%" },
  { amount: 0.2, readable: "20%" },
  { amount: 0.25, readable: "25%" },
  { amount: 0.3, readable: "30%" },
  { amount: 0.35, readable: "35%" },
  { amount: 0.4, readable: "40%" },
  { amount: 0.45, readable: "45%" },
  { amount: 0.5, readable: "50%" },
];

export const ERROR_MESSAGE =
  "Hmm, it doesn't look like that's a valid amount. Try 1 more time!";

export const FIXED_DECIMAL_AMOUNT = 2;
