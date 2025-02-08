import {
  AcademicCapIcon,
  ArrowUpTrayIcon,
  BeakerIcon,
  ChartBarSquareIcon,
  CircleStackIcon,
  ClipboardDocumentCheckIcon,
  ClipboardIcon,
  Cog6ToothIcon,
  EyeIcon,
  HomeIcon,
  PlusIcon,
  StarIcon,
  TableCellsIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { DailySummaryData, NavLinks } from "./typings";
import { BadgeIcon, ChartBarIcon, Clock } from "lucide-react";

export const navLinks: NavLinks[] = [
  { Icon: HomeIcon, title: "Dashboard", path: "/" },
  { Icon: BeakerIcon, title: "Trade Logs", path: "/trade-logs" },
  { Icon: ArrowUpTrayIcon, title: "Upload a Trade", path: "/upload-trade" },
  { Icon: AcademicCapIcon, title: "Awards & Certificates", path: "/not" },
  { Icon: ChartBarIcon, title: "Trade Data & Analytics", path: "/analytics" },
  {
    Icon: ClipboardDocumentCheckIcon,
    title: "Update/Review Strategy",
    path: "/not",
  },
  { Icon: Cog6ToothIcon, title: "Settings", path: "/not" },
  { Icon: UserIcon, title: "Log Out / Switch Account", path: "/not" },
];

export const topRowData = [
  { title: "Realized PnL($)", Icon: BadgeIcon, value: "798.48USDT" },
  {
    title: "Win Rate",
    Icon: BadgeIcon,
    value: "46.36%",
  },
  { title: "Risk Factors", Icon: BadgeIcon, value: "+12.8R" },
  {
    title: "Average Holding Time",
    Icon: Clock,
    value: "2hrs, 15min",
  },
];
export const dailySummaryData: DailySummaryData[] = [
  {
    date: "01/30",
    coinTicker: "SOLUSDT.P",
    risk: 50,
    direction: "long",
    image: "/assets/profile-pic.webp",
    entryPrice: 85958,
    exitPrice: 484985,
    riskFactors: 4,
    timeWindow: "Zone 4",
    divergence: true,
    headAndShoulders: true,
    proTrendBias: false,
    trades: 316,
    trendlineRetest: true,
    winRate: 72,
    realizedPnL: 357.86,
    roi: 2,
    equity: 55885,
    id: 1,
  },
  {
    date: "01/30",
    coinTicker: "SOLUSDT.P",
    risk: 50,
    direction: "long",
    image: "/assets/profile-pic.webp",
    entryPrice: 85958,
    exitPrice: 484985,
    riskFactors: 4,
    timeWindow: "Zone 4",
    divergence: true,
    headAndShoulders: true,
    proTrendBias: false,
    trades: 316,
    trendlineRetest: true,
    winRate: 72,
    realizedPnL: 357.86,
    roi: 2,
    equity: 55885,
    id: 1,
  },
  {
    date: "01/30",
    coinTicker: "SOLUSDT.P",
    risk: 50,
    direction: "long",
    image: "/assets/profile-pic.webp",
    entryPrice: 85958,
    exitPrice: 484985,
    riskFactors: 4,
    timeWindow: "Zone 4",
    divergence: true,
    headAndShoulders: true,
    proTrendBias: false,
    trades: 316,
    trendlineRetest: true,
    winRate: 72,
    realizedPnL: 357.86,
    roi: 2,
    equity: 55885,
    id: 1,
  },
  {
    date: "01/30",
    coinTicker: "SOLUSDT.P",
    risk: 50,
    direction: "long",
    image: "/assets/profile-pic.webp",
    entryPrice: 85958,
    exitPrice: 484985,
    riskFactors: 4,
    timeWindow: "Zone 4",
    divergence: true,
    headAndShoulders: true,
    proTrendBias: false,
    trades: 316,
    trendlineRetest: true,
    winRate: 72,
    realizedPnL: 357.86,
    roi: 2,
    equity: 55885,
    id: 1,
  },
];

export const pnlOverTimeChartData = [
  { month: "January", gains: 186, losses: 80 },
  { month: "February", gains: 305, losses: 200 },
  { month: "March", gains: 237, losses: 120 },
  { month: "April", gains: 73, losses: 190 },
  { month: "May", gains: 209, losses: 130 },
  { month: "June", gains: 214, losses: 140 },
];

export const listOfCoins = [
  "BTCUSDT",
  "ETHUSDT",
  "AVAXUSDT",
  "1000PEPEUSDT",
  "SOLUSDT",
  "DOGEUSDT",
  "LINKUSDT",
  "UNIUSDT",
  "SUIUSDT",
  "TRUMPUSDT",
  "NOTUSDT",
];
