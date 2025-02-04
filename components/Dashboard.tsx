import { ArrowRightIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import WeeklySummary from "./WeeklySummary";
import DailySummary from "./DailySummary";
import CumulativePnLSummary from "./CumulativePnLSummary";
import LineChartsSummary from "./LineChartsSummary";

function Dashboard() {
  return (
    <main className="p-5">
      {/* <div className="flex items-center w-full justify-between px-3">
        <form className=" rounded-full h-12 gradient flex items-center justify-start px-5 relative flex-1 max-w-[250px]">
          <input
            className="bg-transparent outline-none active:outline-none focus:outline-none text-base font-semibold placeholder:tracking-wider placeholder:font-semibold tracking-wider text-white"
            placeholder="Search"
          />
          <button className="absolute right-0 rounded-full bg-purple text-[#fff] h-12 px-4">
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </form>
        <button className="p-2 rounded-md border border-outline_purple">
          <Bars3BottomLeftIcon className="w-5 h-5 text-white" />
        </button>
      </div> */}
      <div className="flex flex-col mt-16">
        <h2 className="text-3xl font-extrabold flex items-center gap-2">
          Dashboard <span className="animate-wave -mt-2 inline-block">👋</span>
        </h2>
        <h3 className="font-bold text-md pt-2">Welcome aboard, Cool Guy</h3>
        <WeeklySummary />
        <DailySummary />
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 w-full py-5 mt-5">
          <CumulativePnLSummary />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3 border w-full col-span-2 xl:col-span-1">
            <LineChartsSummary />
            <LineChartsSummary />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
