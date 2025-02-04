import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dailySummaryData } from "@/utils/constants";
import PieChartSummary from "./PieChartSummary";

function DailySummary() {
  return (
    <section className="py-10 w-full flex flex-col gap-2 h-full">
      <h2 className="text-2xl font-bold">Daily Summary</h2>
      <div className="flex flex-col xl:flex-row gap-4 mt-3 h-full">
        <table className="w-full gradient-inverse border border-outline_purple ">
          <thead className="w-full text-lg font-semibold tracking-wider">
            <tr className="grid-cols-9 border-b border-[#4c4c4c]">
              <td className="col-span-2 px-3 py-4">Date</td>
              <td className="px-3 py-4">Trades</td>
              <td className="px-3 py-4">Win Rate</td>
              <td className="col-span-2 px-3 py-4"><span className="hidden xl:flex">Realized</span> PnL</td>
              <td className="px-3 py-4">ROI</td>
              <td className="col-span-2 px-3 py-4 text-right">Equity</td>
            </tr>
          </thead>
          <tbody className="w-full">
            {dailySummaryData.map(
              ({ date, equity, realizedPnL, roi, trades, winRate }, indx) => (
                <tr
                  key={indx}
                  className="grid-cols-9 border-b border-[#4c4c4c] last:border-0"
                >
                  <td className="col-span-2 px-3 py-4">{date}</td>
                  <td className="px-3 py-4">{trades}</td>
                  <td className="px-3 py-4">{winRate}%</td>
                  <td
                    className={`col-span-2 px-3 py-4 ${
                      realizedPnL < 0
                        ? "text-red"
                        : realizedPnL > 0
                        ? "text-green"
                        : "text-white pl-9"
                    }`}
                  >
                    {realizedPnL}
                  </td>
                  <td
                    className={`px-3 py-4 ${
                      roi < 0
                        ? "text-red"
                        : roi > 0
                        ? "text-green"
                        : "text-white pl-9"
                    }`}
                  >
                    {roi}%
                  </td>
                  <td className="text-right col-span-2 px-3 py-4">{equity}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <PieChartSummary />
      </div>
    </section>
  );
}

export default DailySummary;
