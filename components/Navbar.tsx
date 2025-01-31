"use client";

import { navLinks } from "@/utils/constants";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import {
  ChevronDoubleRightIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { ArrowRightIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const currentPath = usePathname();
  return (
    <>
      <div className="hidden lg:flex flex-col flex-1 max-w-72 bg-gradient-to-r from-[#18213A] via-[#1B253F] to-[#13192F] shadow py-3 gap-3 rounded-r-lg overflow-y-scroll scrollbar-hide">
        <div className="flex items-center w-full justify-between px-3">
          <h3 className="text-2xl font-extrabold">Adekola</h3>
          <button className="p-2 rounded-md border border-gray-400">
            <Bars3BottomLeftIcon className="w-5 h-5 text-white" />
          </button>
        </div>
        <div>
          {/* Profile */}
          <div className="flex flex-col items-center justify-center w-full mt-8">
            <div className="w-32 h-32 rounded-full relative ">
              <Image
                src={"https://github.com/shadcn.png"} fill
                alt=""
                className="object-cover w-full rounded-full h-full"
              />
            </div>
            <h2 className="text-white  font-bold text-lg mt-2">
              Adekola Adedeji
            </h2>
            <h3 className="text-gray-400 text-lg font-bold tracking-wider">
              $10,000
            </h3>
          </div>
          {/* Main */}
          <div className="">
            <h3 className="text-white text-sm font-semibold px-4">MAIN</h3>
            <div className="flex flex-col w-full p-1">
              {navLinks.map(({ Icon, path, title }, indx) => (
                <Link
                  key={indx}
                  href={path}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-bold ${
                    currentPath == path ? "text-white bg-darker" : "text-white"
                  } hover:text-[#7700CC] duration-200 transition-all`}
                >
                  <h3 className="flex text-sm items-center space-x-3">
                    <Icon className="w-4 h-4" /> <span>{title}</span>
                  </h3>
                  <span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
          {/* Settings */}
        </div>
      </div>

      {/* Small Screens & below */}
      <div className="fixed top-0 left-0 py-2 px-4 bg-lighter w-full z-50 lg:hidden flex items-center justify-between">
        <h3 className="text-2xl font-extrabold">Adekola</h3>
        <button className="p-2 rounded-md border border-gray-400">
          {isNavOpen ? (
            <XMarkIcon
              onClick={() => setIsNavOpen(false)}
              className="w-5 h-5 text-white"
            />
          ) : (
            <Bars3BottomLeftIcon
              onClick={() => setIsNavOpen(true)}
              className="w-5 h-5 text-white"
            />
          )}
        </button>{" "}
        <div
          className={`lg:hidden flex flex-col w-[260px] bg-lighter shadow py-3 gap-3 rounded-r-lg overflow-y-scroll scrollbar-hide ${
            isNavOpen ? "left-0" : "-left-full"
          } absolute top-0 z-50 h-screen ease-in-out duration-300 transition-all`}
        >
          <div className="bg-lighter z-50">
            {/* Profile */}
            <div className="flex flex-col items-center justify-center w-full mt-6">
              <div className="w-32 h-32 rounded-full relative">
                <Image
                  src={"https://github.com/shadcn.png"} fill
                  alt=""
                  className="object-cover w-full rounded-full h-full"
                />
              </div>
              <h2 className="text-white  font-bold text-lg mt-2">
                Adekola Adedeji
              </h2>
              <h3 className="text-gray-400 text-lg font-bold tracking-wider">
                $10,000
              </h3>
            </div>
            {/* Main */}
            <div className="">
              <h3 className="text-white text-sm font-semibold px-4">MAIN</h3>
              <div className="flex flex-col w-full p-1">
                {navLinks.map(({ Icon, path, title }, indx) => (
                  <Link
                    key={indx}
                    href={path}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg font-bold ${
                      currentPath == path
                        ? "text-white bg-darker"
                        : "text-white"
                    } hover:text-[#433D95] duration-200 transition-all`}
                  >
                    <h3 className="flex text-sm items-center space-x-3">
                      <Icon className="w-4 h-4" /> <span>{title}</span>
                    </h3>
                    <span>
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {/* Settings */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
