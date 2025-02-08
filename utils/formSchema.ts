import * as z from 'zod'

export const formSchema  = z.object({
    // date: z.date(),
    coinTicker: z.string(),
    direction: z.string(),
    leverage: z.number(),
    timeWindow: z.string(),
    // entryPrice: z.number(),
    // takeProfitPrice: z.number(),
    // stopLossPrice: z.number(),
    // riskAmount: z.number(),
    // divergence: z.boolean(),
    // head_Shoulders: z.boolean(),
    // proTrendBias: z.boolean(),
    // trendlineRetest: z.boolean(),
    // confidenceLevel: z.number(),
    // tradeScreenshot: z.string(),
    // tradeReview: z.string(),
})