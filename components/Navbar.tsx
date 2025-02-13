"use client";

import { navLinks } from "@/utils/constants";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  SignOutButton,
  UserButton,
  useSignIn,
  useUser,
} from "@clerk/nextjs";
import {
  ChevronRightIcon,
  Cog6ToothIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Button } from "./ui/button";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const currentPath = usePathname();
  const { user } = useUser();
  return (
    <>
      {/* Large screens & above */}
      <div className="hidden lg:flex flex-col flex-1 max-w-[300px] gradient shadow py-3 gap-3 rounded-r-lg relative overflow-y-scroll scrollbar-hide">
        <div className="flex items-center w-full justify-center p-3">
          <Link
            href="/"
            className="bg-gradient-to-r from-sky text-3xl relative font-extrabold to-white bg-clip-text text-transparent"
          >
            Trade Journal
            <span className="w-2 h-2 bg-sky animate-bounce absolute -right-4 bottom-3 rounded-full" />
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {/* Profile */}
          <div className="flex flex-col items-center justify-center w-full">
            <div className="w-32 h-32 rounded-full relative ">
              <Image
                src={user?.imageUrl ?? "https://github.com/shadcn.png"}
                fill
                alt=""
                className="object-cover w-full rounded-full h-full"
              />
            </div>
            <h2 className="text-white font-bold text-lg mt-2">
              {user?.fullName ?? "Hello World"}
            </h2>
            <h3 className="text-white/80 text-lg font-bold tracking-wider">
              $10,000.00
            </h3>
          </div>
          {/* Main */}
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-sm font-semibold px-4">MAIN</h3>
            <div className="flex flex-col w-full p-2">
              {navLinks.map(({ Icon, path, title }, indx) => (
                <Link
                  key={indx}
                  href={path}
                  className={`w-full flex items-center justify-between truncate px-6 py-3 rounded-lg font-bold overflow-hidden ${
                    currentPath == path
                      ? "text-purple bg-background relative before:absolute before:h-full before:w-2 before:left-0 before:top-0 before:bg-purple after:absolute after:h-full after:w-2 after:right-0 after:top-0 after:bg-purple "
                      : "text-white"
                  } hover:text-purple duration-200 transition-all`}
                >
                  <h3 className="flex text-sm items-center space-x-2">
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
          <div className="flex flex-col w-full p-2">
            {navLinks
              .slice(navLinks.length - 2, navLinks.length)
              .map(({ Icon, path, title }, indx) => (
                <Link
                  key={indx}
                  href={path}
                  className={`w-full flex items-center justify-between truncate px-6 py-3 rounded-lg font-bold overflow-hidden ${
                    currentPath == path
                      ? "text-purple bg-background relative before:absolute before:h-full before:w-2 before:left-0 before:top-0 before:bg-purple after:absolute after:h-full after:w-2 after:right-0 after:top-0 after:bg-purple "
                      : "text-white"
                  } hover:text-purple duration-200 transition-all`}
                >
                  <h3 className="flex text-sm items-center space-x-2">
                    <Icon className="w-4 h-4" /> <span>{title}</span>
                  </h3>
                  <span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Small screens & below */}
      <div className="fixed top-0 left-0 p-3 gradient w-full z-50 lg:hidden flex items-center justify-between shadow shadow-white/40">
        <Link
          href="/"
          className="bg-gradient-to-r from-sky text-3xl relative font-extrabold to-white bg-clip-text text-transparent"
        >
          Trade Journal
          <span className="w-2 h-2 bg-sky animate-bounce absolute -right-4 bottom-3 rounded-full" />
        </Link>{" "}
        <div className="flex items-center justify-end w-fit shrink-0 gap-4">
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="bg-input text-white hover:bg-purple/80">
                  Sign In
                </Button>
                {/* <SignIn />{" "} */}
              </SignInButton>
            </SignedOut>
          </div>
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="p-2 overflow-hidden border border-white rounded-lg hover:bg-input hover:border-input transition duration-100 ease-in-out"
          >
            {isNavOpen ? (
              <XMarkIcon className="w-5 h-5 text-white" />
            ) : (
              <Bars3BottomLeftIcon className="w-5 h-5 text-white" />
            )}
          </button>{" "}
        </div>
        <div
          className={`lg:hidden flex flex-col w-[280px] gradient shadow py-3 gap-5 rounded-r-lg overflow-y-scroll scrollbar-hide ${
            isNavOpen ? "left-0" : "-left-full"
          } absolute top-0 z-50 h-screen ease-in-out duration-300 transition-all`}
        >
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="bg-input m-auto px-10 py-3 flex flex-col -gap-4 text-white hover:bg-purple/80">
                Sign In to use the{" "}
                <p className="font-bold block">Trade Journal</p>
              </Button>
              {/* <SignIn />{" "} */}
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className="gradient z-50 flex flex-col gap-5">
              {/* Profile */}
              <div className="flex flex-col items-center justify-center w-full mt-6">
                <div className="w-32 h-32 rounded-full relative">
                  <Image
                    src={user?.imageUrl ?? "https://github.com/shadcn.png"}
                    fill
                    alt=""
                    className="object-cover w-full rounded-full h-full"
                  />
                </div>
                <h2 className="text-white  font-bold text-lg mt-2">
                  {user?.fullName ?? "Not signed in"}
                </h2>
                <h3 className="text-gray-400 text-lg font-bold tracking-wider">
                  $10,000
                </h3>
              </div>
              <div className="flex flex-col gap-5">
                {/* Main */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col w-full gap-2 p-2">
                    {navLinks
                      .slice(0, navLinks.length - 2)
                      .map(({ Icon, path, title }, indx) => (
                        <Link
                          onClick={() => setIsNavOpen(false)}
                          key={indx}
                          href={path}
                          className={`w-full flex items-center justify-between truncate px-6 py-4 rounded-lg font-bold overflow-hidden ${
                            currentPath == path
                              ? "text-purple bg-background relative before:absolute before:h-full before:w-2 before:left-0 before:top-0 before:bg-purple after:absolute after:h-full after:w-2 after:right-0 after:top-0 after:bg-purple "
                              : "text-white"
                          } hover:text-purple duration-200 transition-all`}
                        >
                          <h3 className="flex text-sm truncate items-center space-x-2">
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
                <div className="flex flex-col w-full gap-2 p-2">
                  {navLinks
                    .slice(navLinks.length - 2, navLinks.length)
                    .map(({ Icon, path, title }, indx) => (
                      <Link
                        onClick={() => setIsNavOpen(false)}
                        key={indx}
                        href={path}
                        className={`w-full flex items-center justify-between truncate px-6 py-4 rounded-lg font-bold overflow-hidden relative ${
                          currentPath == path
                            ? "text-purple bg-background relative before:absolute before:h-full before:w-2 before:left-0 before:top-0 before:bg-purple after:absolute after:h-full after:w-2 after:right-0 after:top-0 after:bg-purple "
                            : "text-white"
                        } hover:text-purple duration-200 transition-all`}
                      >
                        <h3 className="flex text-sm truncate items-center space-x-2">
                          <Icon className="w-4 h-4" /> <span>{title}</span>
                        </h3>
                        <span>
                          <ChevronRightIcon className="h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  <SignOutButton>
                    <Button className="w-full flex items-center justify-between truncate px-6 py-4 rounded-lg font-bold overflow-hidden hover:bg-input">
                      <h3 className="flex text-sm truncate items-center space-x-2">
                        <UserIcon className="w-4 h-4" />{" "}
                        <span>Log Out | Switch Account</span>
                      </h3>
                      <span>
                        <ChevronRightIcon className="h-4 w-4" />
                      </span>
                    </Button>
                  </SignOutButton>
                </div>
              </div>
            </div>
          </SignedIn>
        </div>
      </div>
    </>
  );
}

export default Navbar;
