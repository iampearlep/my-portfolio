"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function AboutMe() {
  const AboutImage =
    "https://res.cloudinary.com/diukx5wx0/image/upload/v1722367485/IMG_6813_kc8jwn.jpg";
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className=" w-full flex flex-col  gap-y-7 md:gap-y-20 justify-center items-center text-neutral-50 mx-auto py-10 md:py-10"
    >
    <div>
      <h1 className="text-xl">About Me</h1>
    </div>
      <div className="flex flex-col md:flex-row gap-y-6 gap-x-12  text-start justify-center items-center w-10/12 md:w-10/12 text-[0.92rem] leading-loose md:text-base md:leading-loose">
        <div className="md:w-[35%]">
          <Image
            src={AboutImage}
            alt="Princess Enuma"
            width={1170}
            height={1424}
            className="w-full h-full"
          />
        </div>
        <div className="md:w-[65%]">
          <h3 className="py-3 text-start">Hello There!</h3>
          <p>
            I&#39;m Princess Enuma, a self-motivated front-end developer with a
            passion for building beautiful, brilliant and functional user
            interfaces using frontend technologies.
          </p>
          <p>
            I&#39;m interested in user experience, accessibility and web
            animations. I&#39;ve always been fascinated by the way technology
            can shape user experiences. That&#39;s why I love turning designs
            into interactive, and user-friendly websites.
          </p>
          <p>
            I&#39;m always eager to learn new technologies and contribute to
            innovative projects.
          </p>
          <p>
            When I&#39;m not coding you&#39;ll likely find me lost in the world
            of music, exploring new genres, or unwinding with a good anime/series.
          </p>
        </div>
      </div>

      <div>
        <Link
          href="/"
          className="flex flex-row justify-center items-center gap-x-1 hover:text-purple-300"
        >
          {" "}
          <IoIosArrowRoundBack />
          Go back{" "}
        </Link>
      </div>
    </motion.main>
  );
}
