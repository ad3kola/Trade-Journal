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
  { Icon: BeakerIcon, title: "Trade Logs", path: "/not" },
  { Icon: ArrowUpTrayIcon, title: "Upload a Trade", path: "/not" },
  { Icon: AcademicCapIcon, title: "Awards & Certificates", path: "/not" },
  { Icon: ChartBarIcon, title: "Trade Data & Analytics", path: "/not" },
  { Icon: ClipboardDocumentCheckIcon, title: "Update/Review Strategy", path: "/not" },
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
    trades: 316,
    winRate: 72,
    realizedPnL: 357.86,
    roi: 2,
    equity: 55885,
  },
  {
    date: "01/30",
    trades: 316,
    winRate: 72,
    realizedPnL: -357.86,
    roi: 2,
    equity: 55885,
  },
  {
    date: "01/30",
    trades: 316,
    winRate: 72,
    realizedPnL: 0,
    roi: 2,
    equity: 55885,
  },  {
    date: "01/30",
    trades: 316,
    winRate: 72,
    realizedPnL: 0,
    roi: 2,
    equity: 55885,
  },  {
    date: "01/30",
    trades: 316,
    winRate: 72,
    realizedPnL: 0,
    roi: 2,
    equity: 55885,
  },
];
