"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function AboutMe() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="md:h-[100vh] w-full flex flex-col  gap-y-7 md:gap-y-20 justify-center items-center text-neutral-50 mx-auto py-10 md:py-0"
    >
      <h2 className="text-4xl font-semibold">About me</h2>

      <div className="flex flex-col text-center justify-center items-center w-11/12 md:w-7/12 text-[0.92rem] leading-loose md:text-base md:leading-loose">
        <p>
          Hello, I&#39;m Princess Enuma,{" "}
          <span className="font-light text-neutral-500"> a self-motivated</span>{" "}
          front-end developer{" "}
          <span className="font-light text-neutral-500">
            with a passion for
          </span>{" "}
          building beautiful, brilliant,{" "}
          <span className="font-light text-neutral-500">
            and functional user interfaces{" "}
          </span>
          using frontend technologies,{" "}
          <span className="font-light text-neutral-500">
            I&#39;m interested in
          </span>{" "}
          user experience,{" "}
          <span className="font-light text-neutral-500">accessibility and</span>{" "}
          web animations.{" "}
          <span className="font-light text-neutral-500">
            I&#39;ve always been{" "}
          </span>
          fascinated{" "}
          <span className="font-light text-neutral-500">
            by the way technology can shape
          </span>{" "}
          user experiences.
          <span className="font-light text-neutral-500">
            That&#39;s why I
          </span>{" "}
          love turning designs into{" "}
          <span className="font-light text-neutral-500">interactive, and</span>{" "}
          user-friendly websites.{" "}
          <span className="font-light text-neutral-500">
            I&#39;m always eager
          </span>{" "}
          to learn new technologies
          <span className="font-light text-neutral-500">
            {" "}
            and contribute
          </span>{" "}
          to innovative projects.{" "}
          <span className="font-light text-neutral-500">
            Witnessing my code come to life
          </span>{" "}
          as a user-friendly website is{" "}
          <span className="font-light text-neutral-500">
            incredibly rewarding
          </span>
          . When I&#39;m not coding,{" "}
          <span className="font-light text-neutral-500">
            {" "}
            you&#39;ll likely find me
          </span>{" "}
          lost in the world of music,
          <span className="font-light text-neutral-500">
            {" "}
            exploring new genres
          </span>
          , or unwinding with a good anime series.
        </p>
      </div>

      <div>
        <Link
          href="/"
          className="flex flex-row justify-center items-center gap-x-1"
        >
          {" "}
          <IoIosArrowRoundBack />
          Go back{" "}
        </Link>
      </div>
    </motion.main>
  );
}
