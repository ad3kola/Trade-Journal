import { topRowData } from "@/utils/constants";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";

function TopRow() {
  return (
    <section className="py-10 w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {topRowData.map(({ Icon, percentChange, title, value }, indx) => (
          <div
            key={indx}
            className="flex flex-col items-start justify-center w-full rounded-md p-2 border-2 bg-lighter border-gray-400 dark:border-gray-600"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2 dark:text-gray-100">
                <Icon className="w-6 h-6" />{" "}
                <span className="text-lg">{title}</span>
              </div>
              <EllipsisHorizontalIcon className="w-6 h-6" />
            </div>
            <div className="relative">
              <h4>{value}</h4>
              <span>{percentChange}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopRow;
