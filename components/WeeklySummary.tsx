import { topRowData } from "@/utils/constants";
import { AlarmClock, DollarSign } from "lucide-react";

function WeeklySummary() {
  return (
    <section className="mt-10 w-full flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Weekly Summary</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-6 gap-3 mt-3">
        {topRowData.map(({ Icon, title, value }, indx) => (
          <div
            key={indx}
            className={`flex items-center justify-start w-full rounded-2xl p-4 gap-4 border gradient border-outline_purple hover:opacity-70 transform transition hover:-translate-y-1 duration-500 ease-in-out cursor-pointer ${
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
      </div>
    </section>
  );
}

export default WeeklySummary;
