import CoinsWithMostLosses from "@/components/Analytics/CoinsWithMostLosses";
import CoinsWithMostWins from "@/components/Analytics/CoinsWithMostWins";
import Divergence_HS from "@/components/Analytics/Divergence_HS";
import MostTradedCoins from "@/components/Analytics/MostTradedCoins";
import PnLOverTime from "@/components/Analytics/PnLOverTime";
import ProTrend_Retest from "@/components/Analytics/ProTrend_Retest";
import RiskFactorsperTrade from "@/components/Analytics/RiskFactorsperTrade";
import ROI from "@/components/Analytics/ROI";
import StrategyStats from "@/components/Analytics/StrategyStats";
import { topRowData } from "@/utils/constants";
import { AlarmClock, DollarSign } from "lucide-react";

function page() {
  return (
    <main className="p-5 pb-10">
      <div className="flex flex-col mt-20">
        <h2 className="text-2xl lg:text-3xl font-extrabold flex items-center gap-2">
          Trade & Data Analytics - Optimize your Edge
        </h2>
        <h3 className="font-bold text-base pt-2">
          Deep dive into your trading performance with visual insights, win rate
          tracking, and PnL trrends.
        </h3>
        <div className="flex flex-col w-full p-5 gap-4">
          {/* Performance Charts */}
          <div className="grid md:grid-cols-2 gap-3">
            {/* Pnl Over Time [Line Chart] */}
            <PnLOverTime />
            <RiskFactorsperTrade />
            {/* Risk fatcors per win [Bar Chart] */}
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-3">
            <CoinsWithMostWins />
            <CoinsWithMostLosses />
            {/* By the left */}
            {/* Coins with the mose losses by how much lost  [bar chart] */}
            {/* Coins with the mose wins by how much won  [bar chart] */}
            {/* By the right */}
            <div className="flex xl:flex-col gap-3 col-span-2 xl:col-span-1 h-full">
              {topRowData
                .slice(topRowData.length - 2, topRowData.length)
                .map(({ title, value }, indx) => (
                  <div
                    key={indx}
                    className={`flex items-center justify-start w-full rounded-2xl p-4 gap-4 border gradient border-outline_purple h-full`}
                  >
                    <div className="flex flex-col w-full">
                      <div className="flex items-center dark:text-white">
                        <span className="text-base">{title}</span>
                      </div>
                      <h4 className="text-4xl lg:text-3xl 2xl:text-4xl font-extrabold tracking-wider text-white">
                        {value}
                      </h4>
                    </div>
                  </div>
                ))}
            </div>
            {/* TOtal number of trades ever taken */}
            {/* Win Rate */}
          </div>
          <div className="grid gap-3">
            <Divergence_HS />
            <ProTrend_Retest />
            <div className="grid grid-cols-2 gap-3 w-full ">
              <MostTradedCoins />
              <ROI />
            </div>

            {/* Trades won with divergence, head & shoulders, trend retest and pro trend bias */}
          </div>
          <div>{/* most trades won in time zones & trading windows  */}</div>
        </div>
      </div>
    </main>
  );
}

export default page;
