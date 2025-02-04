import { topRowData } from "@/utils/constants";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

function WeeklySummary() {
  return (
    <section className="py-10 w-full flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Weekly Summary</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 mt-3">
      {topRowData.map(({ Icon, title, value }, indx) => (
          <div
            key={indx}
            className={`flex flex-col items-start justify-center w-full rounded-2xl pt-4 py-6 px-5 gap-2 border gradient border-outline_purple  ${
              indx === 0 || indx === topRowData.length - 1 ? "col-span-2" : ""
            }`}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2 dark:text-white">
                <span className="text-base">{title}</span>
              </div>
              <EllipsisHorizontalIcon className="w-10 h-10" />
            </div>
              <h4 className="text-4xl font-extrabold tracking-wider text-white">{value}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeeklySummary;
