import { topRowData } from "@/utils/constants";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { AlarmClock, DollarSign } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

function WeeklySummary() {
  return (
    <section className="mt-10 w-full flex flex-col gap-2">
      <h2 className="text-2xl lg:text-left text-center font-bold">
        Weekly Summary
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-3 mt-3 w-full">
        <SignedIn>
          {topRowData.map(({ title, value }, indx) => (
            <div
              key={indx}
              className={`flex items-center justify-start w-full rounded-2xl p-4 gap-4 border gradient border-input hover:opacity-70 transform transition hover:-translate-y-1 duration-500 ease-in-out cursor-pointer ${
                indx === 0 || indx === topRowData.length - 1 ? "col-span-2" : ""
              }`}
            >
              {indx == 0 && (
                <div className="bg-green rounded-full h-16 w-20 flex items-center justify-center">
                  <DollarSign className="text-white h-10 w-10 flex-shrink-0" />
                </div>
              )}{" "}
              {indx == 3 && (
                <div className="bg-sky rounded-full h-16 w-20 flex items-center justify-center">
                  <AlarmClock className="text-white h-10 w-10 flex-shrink-0" />
                </div>
              )}
              <div className="flex flex-col w-full">
                <div className="flex items-center dark:text-white">
                  <span className="text-base">{title}</span>
                </div>
                <h4 className="text-4xl lg:text-3xl 2xl:text-4xl font-extrabold tracking-wider text-white">
                  {value}
                </h4>
              </div>
            </div>
          ))}
        </SignedIn>
        <SignedOut>
          <div className="border bg-input/20 border-input rounded-2xl overflow-hidden flex flex-col col-span-2 sm:col-span-3 md:col-span-2 justify-start gap-3 py-4 px-6">
            <Skeleton className="h-2 w-1/2" />
            <Skeleton className="h-2 w-full" />
          </div>
          <div className="border bg-input/20 border-input rounded-2xl overflow-hidden flex col-span-2 md:col-span-1 flex-col justify-start gap-3 py-4 px-6">
            <Skeleton className="h-2 w-1/2" />
            <Skeleton className="h-2 w-full" />
          </div>
          <div className="border bg-input/20 border-input rounded-2xl overflow-hidden flex flex-col md:col-span-1 justify-start gap-3 py-4 px-6">
            <Skeleton className="h-2 w-1/2" />
            <Skeleton className="h-2 w-full" />
          </div>
          <div className="border bg-input/20 border-input rounded-2xl overflow-hidden flex flex-col col-span-2 sm:col-span-3 md:col-span-2 justify-start gap-3 py-4 px-6">
            <Skeleton className="h-2 w-1/2" />
            <Skeleton className="h-2 w-full" />
          </div>
        </SignedOut>
      </div>
    </section>
  );
}

export default WeeklySummary;
