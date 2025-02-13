"use client";

import WeeklySummary from "./WeeklySummary";
import DailySummary from "./DailySummary";
import CumulativePnLSummary from "./CumulativePnLSummary";
import LineChartsSummary from "./LineChartsSummary";
import { Skeleton } from "../ui/skeleton";
import { SignedIn, SignedOut, SignInButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Dashboard: React.FC = () => {
  const { user } = useUser();
  return (
    <main className="p-5 pb-10">
      <div className="flex flex-col mt-[70px] gap-3">
        <h2 className="text-3xl font-extrabold flex items-center gap-2">
          Dashboard <span className="animate-wave -mt-2 inline-block">👋</span>
        </h2>
        <SignedIn>
          <h3 className="font-bold text-md pt-2">
            Welcome aboard, {user?.fullName}
          </h3>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="bg-input w-52 text-white hover:bg-purple/80">
              Sign In
            </Button>
            {/* <SignIn />{" "} */}
          </SignInButton>
        </SignedOut>
        <WeeklySummary />
        <SignedIn>
          <DailySummary />
        </SignedIn>
        <div className=" w-full py-5 mt-5">
          <h2 className="text-2xl text-center lg:text-left font-bold">
            Cumulative Statistics
          </h2>

          <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 mt-5">
            <CumulativePnLSummary />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-x-3 gap-y-6 w-full col-span-2 xl:col-span-1">
              <SignedOut>
                <div className="p-5 flex flex-col gap-4 border gradient-inverse border-input text-card-foreground shadow rounded-2xl w-full">
                  <Skeleton className="w-40 h-3" />
                  <Skeleton className="w-80 h-4" />
                  <Skeleton className="h-72 w-full rounded-2xl mt-3" />
                </div>
              </SignedOut>
              <SignedIn>
                <LineChartsSummary />
                <LineChartsSummary />
              </SignedIn>
            </div>
          </div>
          <SignedOut>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-6 mt-5">
              <CumulativePnLSummary />
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-x-3 gap-y-6 w-full col-span-2 xl:col-span-1">
                <SignedOut>
                  <div className="p-5 flex flex-col gap-4 border gradient-inverse border-input text-card-foreground shadow rounded-2xl w-full">
                    <Skeleton className="w-40 h-3" />
                    <Skeleton className="w-80 h-4" />
                    <Skeleton className="h-72 w-full rounded-2xl mt-3" />
                  </div>
                </SignedOut>
                <SignedIn>
                  <LineChartsSummary />
                  <LineChartsSummary />
                </SignedIn>
              </div>
            </div>
          </SignedOut>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
