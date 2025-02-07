"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
export const pnlOverTimeChartData = [
    { month: "January", profits: 186, losses: 80 },
    { month: "February", profits: 305, losses: 200 },
    { month: "March", profits: 237, losses: 120 },
    { month: "April", profits: 73, losses: 190 },
    { month: "May", profits: 209, losses: 130 },
    { month: "June", profits: 214, losses: 140 },
]

const chartConfig = {
  profits: {
    label: "Profits",
    color: "#0EA5E9",
  },
  losses: {
    label: "Losses",
    color: "white",
  },
} satisfies ChartConfig

export default function PnLOverTime() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cumulative PnL per month</CardTitle>
        <CardDescription>
          Showing total profits and losses for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={pnlOverTimeChartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillProfits" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-profits)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-profits)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillLosses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-losses)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-losses)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="losses"
              type="natural"
              fill="url(#fillLosses)"
              fillOpacity={0.5}
              stroke="var(--color-losses)"
              stackId="a"
            />
            <Area
              dataKey="profits"
              type="natural"
              fill="url(#fillProfits)"
              fillOpacity={0.5}
              stroke="var(--color-profits)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
