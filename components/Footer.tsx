"use client";
import NowPlaying from "./NowPlaying";

export const Footer = () => {
  return (
    <div className="pt-12 text-white block md:hidden">
      <hr className="text-white" />
      <div className="py-5">
        <NowPlaying />
      </div>
    </div>
  );
};
