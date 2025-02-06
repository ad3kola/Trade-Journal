"use client";

import { dailySummaryData, navLinks } from "@/utils/constants";
import PieChartSummary from "./PieChartSummary";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function DailySummary() {
  return (
    <section className="mt-10 w-full flex flex-col gap-2 h-full">
      <h2 className="text-2xl lg:text-left text-center font-bold">Daily Summary</h2>
      <div className="flex flex-col gap-6 mt-3 h-full oveflow-x-scroll'">
        <Table className="overflow-hidden">
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead className='hidden lg:flex'>Trades</TableHead>
              <TableHead>RealizedPnL</TableHead>
              <TableHead>ROI</TableHead>
              <TableHead className="text-right">Equity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dailySummaryData.slice(navLinks.length-5, navLinks.length).map(
              ({ date, equity, realizedPnL, roi, trades, winRate }, indx) => (
                <TableRow key={indx}>
                  <TableCell className="py-5">{date}</TableCell>
                  <TableCell className="py-5 hidden lg:flex">{trades}</TableCell>
                  <TableCell
                    className={` ${
                      realizedPnL < 0
                        ? "text-red"
                        : realizedPnL > 0
                        ? "text-green"
                        : "text-white pl-9"
                    }`}
                  >
                    {realizedPnL}{" "}
                    {realizedPnL < 0 || realizedPnL > 0 ? "USDT" : ""}
                  </TableCell>
                  <TableCell
                    className={` ${
                      roi < 0
                        ? "text-red"
                        : roi > 0
                        ? "text-green"
                        : "text-white pl-9"
                    }`}
                  >
                    {roi}{roi < 0 || roi > 0 ? "%" : ""}
                  </TableCell>
                  <TableCell className="text-right">${equity}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
        <PieChartSummary />
      </div>
    </section>
  );
}

export default DailySummary;
