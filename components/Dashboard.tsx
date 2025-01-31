import { ArrowRightIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/solid"
import TopRow from "./TopRow"

function Dashboard() {
  return (
    <main className="p-3">
       <div className="flex items-center w-full justify-between px-3">
          <form className=" rounded-full h-12 bg-lighter flex items-center justify-start px-5 relative flex-1 max-w-[250px]">
            <input className="bg-transparent outline-none active:outline-none focus:outline-none text-base font-semibold placeholder:tracking-wider placeholder:font-semibold tracking-wider text-white" placeholder = "Search" />
            <button className='absolute right-0 rounded-full bg-[#7700CC] text-[#fff] h-12 px-4'>
              <ArrowRightIcon className="w-5 h-5"/>
            </button>
          </form>
          <button className="p-2 rounded-md border border-gray-400">
            <Bars3BottomLeftIcon className="w-5 h-5 text-white" />
          </button>
        </div>
        <div className="px-3 py-12">
       <h2 className="text-2xl font-bold">Dashboard</h2>
       <h3 className='font-medium text-lg'>
        Welcome aboard, Cool Guy</h3>
        <TopRow />
        </div>
    </main>
  )
}

export default Dashboard
                                                                                                                                             