import { FIXED_DECIMAL_AMOUNT } from "./constants";

interface CalculateTipParams {
  totalCost: number;
  tipPercent: number;
}

/**
 * @description Takes the totalCost of a meal and calculates the tip amount, returning the tip as a number
 * @returns {number} tip amount calculated based on the totalCost and the tipPercent
 */
export const calculateTipAmount = ({
  totalCost,
  tipPercent,
}: CalculateTipParams): number => {
  let total = totalCost * tipPercent;
  total = Math.round(total * 100) / 100;
  const finalAmount = total.toFixed(FIXED_DECIMAL_AMOUNT);
  return parseFloat(finalAmount);
};
