import * as z from "zod";

export const formSchema = z.object({
  date: z.date(),
  outcome: z.string(),
  coinSymbol: z.string(),
  directionBias: z.string(),
  timeFrame: z.string(),
  leverage: z.string(),
  session: z.string(),
  entryPrice: z.number(),
  takeProfitPrice: z.number(),
  stopLossPrice: z.number(),
  riskAmount: z.number(),
  positionSize: z.number(),
  divergence: z.boolean(),
  head_Shoulders: z.boolean(),
  proTrendBias: z.boolean(),
  trendlineRetest: z.boolean(),
  fibKeyLevels: z.boolean(),
  indicatorHighlight: z.boolean(),
  confidenceLevel: z.number(),
  tradeScreenshot: z.string(),
  tradeReview: z.string(),
});

export type FormSchema = z.infer<typeof formSchema>;
