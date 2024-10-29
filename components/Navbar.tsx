"use client";
import Link from "next/link";
import { Time } from "./Time";
import NowPlaying from "./NowPlaying";

export const Navbar = () => {
  return (
    <div className="mx-auto md:w-11/12 px-6 bg-[#0d0d0d]">
      <div className="flex flex-row justify-between items-center py-6 text-white">
        <div>
          <Link href="/">
            <h1 className="font-bold text-3xl hover:text-purple-300 ">
              Princess.
            </h1>
          </Link>
        </div>
        <div className="flex flex-row gap-x-1 justify-center items-center md:w-3/12 text-sm hover:text-purple-300 ">
          <Time />
          <hr className="hover:text-purple-300  w-3" />
          <p>Lagos, NG</p>
        </div>
        <div className="hidden md:block">
          <div className="">
            <NowPlaying />
          </div>
        </div>
      </div>
    </div>
  );
};
