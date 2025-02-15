"use client";

import { useState, useEffect } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { dailySummaryData } from "@/utils/constants";
import {
  CheckIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useUser } from "@clerk/nextjs";
import { FormSchema } from "@/utils/typings";
import fetchTradeLogs from "@/utils/fetchTradeLogs";

export interface DailySummaryData {
  date: string;
  coinTicker: string;
  risk: number;
  direction: string;
  image: string;
  entryPrice: number;
  exitPrice: number;
  riskFactors: number;
  timeWindow: string;
  divergence: boolean;
  headAndShoulders: boolean;
  proTrendBias: boolean;
  trades: number;
  trendlineRetest: boolean;
  winRate: number;
  realizedPnL: number;
  roi: number;
  equity: number;
  id: number;
}

export const columns: ColumnDef<DailySummaryData>[] = [
  {
    accessorKey: "coinTicker",
    header: "Coin Ticker",
    cell: ({ row }) => <div>{row.getValue("coinTicker")}</div>,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <div>{row.getValue("date")}</div>,
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <div className="flex items-center">
        <Image
          src={row.getValue("image")}
          alt="Trade"
          className="object-cover rounded-xl"
          width={24}
          height={20}
        />
      </div>
    ),
    enableHiding: false,
  },
  {
    accessorKey: "winRate",
    header: "Win Rate",
    cell: ({ row }) => <div>{row.getValue("winRate")}%</div>,
  },
  {
    accessorKey: "realizedPnL",
    header: "Realized PnL",
    cell: ({ row }) => <div>{row.getValue("realizedPnL")}</div>,
    enableHiding: false,
  },
  {
    accessorKey: "roi",
    header: "ROI",
    cell: ({ row }) => <div>{row.getValue("roi")}%</div>,
    enableHiding: false,
  },
  {
    accessorKey: "equity",
    header: "Equity",
    cell: ({ row }) => <div>{row.getValue("equity")}</div>,
    enableHiding: false,
  },
  {
    accessorKey: "risk",
    header: "Risk",
    cell: ({ row }) => <div>{row.getValue("risk")}</div>,
  },
  {
    accessorKey: "direction",
    header: "Direction",
    cell: ({ row }) => <div>{row.getValue("direction")}</div>,
  },
  {
    accessorKey: "entryPrice",
    header: "Entry Price",
    cell: ({ row }) => <div>{row.getValue("entryPrice")}</div>,
  },
  {
    accessorKey: "exitPrice",
    header: "Exit Price",
    cell: ({ row }) => <div>{row.getValue("exitPrice")}</div>,
  },
  {
    accessorKey: "riskFactors",
    header: "R:R",
    cell: ({ row }) => <div>{row.getValue("riskFactors")}</div>,
  },
  {
    accessorKey: "timeWindow",
    header: "Time Window",
    cell: ({ row }) => <div>{row.getValue("timeWindow")}</div>,
  },
  {
    accessorKey: "divergence",
    header: "Divergence",
    cell: ({ row }) => (
      <div>
        {row.getValue("divergence") ? (
          <CheckIcon className="text-white h-7 w-7 rotate-12" />
        ) : (
          <XMarkIcon className="text-white h-7 w-7" />
        )}{" "}
      </div>
    ),
  },
  {
    accessorKey: "headAndShoulders",
    header: "H & S",
    cell: ({ row }) => (
      <div>
        {row.getValue("headAndShoulders") ? (
          <CheckIcon className="text-white h-7 w-7 rotate-12" />
        ) : (
          <XMarkIcon className="text-white h-7 w-7" />
        )}{" "}
      </div>
    ),
  },
  {
    accessorKey: "proTrendBias",
    header: "Pro Trend",
    cell: ({ row }) => (
      <div>
        {row.getValue("proTrendBias") ? (
          <CheckIcon className="text-white h-7 w-7 rotate-12" />
        ) : (
          <XMarkIcon className="text-white h-7 w-7" />
        )}{" "}
      </div>
    ),
  },
  {
    accessorKey: "trendlineRetest",
    header: "Trend Retest",
    cell: ({ row }) => (
      <div>
        {row.getValue("trendlineRetest") ? (
          <CheckIcon className="text-white h-7 w-7 rotate-12" />
        ) : (
          <XMarkIcon className="text-white h-7 w-7" />
        )}{" "}
      </div>
    ),
  },
];

export default function FullTableData() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: dailySummaryData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: { sorting, columnFilters, columnVisibility },
  });
  const { user } = useUser();
  const [allTrades, setAllTrades] = useState<FormSchema[]>([]);
  useEffect(() => {
    const getTrades = async () => {
      if (!user) return;

      const userEmail = user.emailAddresses[0].emailAddress;
      console.log("Fetching trades for:", userEmail);

      const trades = await fetchTradeLogs(userEmail);
      setAllTrades(trades);
    };

    getTrades();
  }, [user]);
  return (
    <div className="w-full overflow-hidden flex flex-col gap-3">
      {" "}
      {/* {allTrades.length} */}
      <div className="flex items-center py-4 space-x-4">
        <Input
          placeholder="Filter by Coin Ticker..."
          value={
            (table.getColumn("coinTicker")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("coinTicker")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger
            asChild
            className="bg-input h-12 rounded-xl border border-outline_input hover:bg-input"
          >
            <Button variant="outline">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="flex flex-col gap-1 cursor-pointer"
          >
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(!!value)}
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="border border-outline_input rounded-xl relative scrollbar-thumb-rounded-3xl scrollbar-thin scrollbar-hide  scrollbar-thumb-outline_input overflow-x-scroll py-2 px-4 scrollbar-track-transparent gradient-inverse">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-input cursor-pointer rounded-lg"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="truncate min-w-40">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="lg"
          className="rounded-md"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronDoubleLeftIcon className="h-4 w-4" /> Previous
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="rounded-md"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next <ChevronDoubleRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
