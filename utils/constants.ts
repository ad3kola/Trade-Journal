
import { BeakerIcon, ChartBarSquareIcon, CircleStackIcon, ClipboardIcon, EyeIcon, HomeIcon, PlusIcon, StarIcon, TableCellsIcon, UserIcon } from "@heroicons/react/24/solid";
import { NavLinks } from "./typings";
import { BadgeIcon, Clock } from "lucide-react";

export const navLinks: NavLinks[] = [
  { Icon: HomeIcon, title: "Dashboard", path: "/" },
  { Icon: BeakerIcon, title: "Sample Pages", path: "/not" },
  { Icon: CircleStackIcon, title: "UI Elements", path: "/not" },
  { Icon: ClipboardIcon, title: "Forms", path: "/not" },
  { Icon: TableCellsIcon, title: "Advanced Tables", path: "/not" },
  { Icon: ChartBarSquareIcon, title: "Charts", path: "/not" },
];

export const topRowData = [
  { title: "Realized PnL($)", Icon: BadgeIcon, value: "798.48USDT"},
  {
    title: "Win Rate(%)",
    Icon: BadgeIcon,
    value: "46.36%",
  },
  { title: "Risk:Reward(R:R)", Icon: BadgeIcon, value: "+12.8R",},
  {
    title: "Average Holding Time",
    Icon: Clock,
    value: "2hrs, 15min",
  },
];
