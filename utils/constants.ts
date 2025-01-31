
import { BeakerIcon, ChartBarSquareIcon, CircleStackIcon, ClipboardIcon, EyeIcon, HomeIcon, PlusIcon, StarIcon, TableCellsIcon, UserIcon } from "@heroicons/react/24/solid";
import { NavLinks } from "./typings";

export const navLinks: NavLinks[] = [
  { Icon: HomeIcon, title: "Dashboard", path: "/" },
  { Icon: BeakerIcon, title: "Sample Pages", path: "/not" },
  { Icon: CircleStackIcon, title: "UI Elements", path: "/not" },
  { Icon: ClipboardIcon, title: "Forms", path: "/not" },
  { Icon: TableCellsIcon, title: "Advanced Tables", path: "/not" },
  { Icon: ChartBarSquareIcon, title: "Charts", path: "/not" },
];

export const topRowData = [
  { title: "Pageviews", Icon: EyeIcon, value: "50.8K", percentChange: 28.4 },
  {
    title: "Monthly users",
    Icon: UserIcon,
    value: "23.6K",
    percentChange: -12.8,
  },
  { title: "New Sign Ups", Icon: PlusIcon, value: "756", percentChange: 3.1 },
  {
    title: "Subscriptions",
    Icon: StarIcon,
    value: "2.3K",
    percentChange: 11.3,
  },
];
