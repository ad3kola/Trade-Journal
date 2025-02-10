import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface NavLinks {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  title: string;
  path: string;
}

export interface TopRowData {
  title: string;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  value: string;
}

export interface DailySummaryData {
  date: string;
  trades: number;
  winRate: number;
  realizedPnL: number;
  roi: number;
  id: number;
  equity: number;
  coinTicker: string;
  risk: number;
  direction: string;
  image: string;
  entryPrice: number;
  exitPrice: number;
  riskFactors: number;
  timeWindow: string;
  divergence: true;
  headAndShoulders: true;
  proTrendBias: false;
  trades: number;
  trendlineRetest: true;
}
export interface CoinsList {
  name: string;
  logo: string;
  value: string;
}

export interface FormSchema {
  date: Date;
  outcome: string;
  coinSymbol: string;
  directionBias: string;
  timeFrame: string;
  leverage: string;
  session: string;
  entryPrice: number;
  takeProfitPrice: number;
  stopLossPrice: number;
  riskAmount: number;
  positionSize: number;
  divergence: boolean;
  head_Shoulders: boolean;
  proTrendBias: boolean;
  trendlineRetest: boolean;
  fibKeyLevels: boolean;
  indicatorHighlight: boolean;
  confidenceLevel: number;
  tradeScreenshot: string;
  tradeReview: string;
}

