"use client"
import Link from "next/link";
import { easeInOut, motion } from 'framer-motion';
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiRedux, SiSanity } from "react-icons/si";

export default function Skills() {

    const skills = [
        {
            icon: <FaHtml5 />,
            name: "HTML"
        },
        {
            icon:  <FaCss3Alt />,
            name: "CSS"
        },
        {
            icon:  <BiLogoJavascript />,
            name: "Javascript"
        },
        {
            icon: <BiLogoTypescript />,
            name: "Typescript"
        },
        {
            icon: <FaReact/>,
            name: " ReactJs"
        },
        {
            icon: <RiNextjsFill />,
            name: " NextJs"
        },
        {
            icon: <RiSupabaseFill/>,
            name: " Supabase"
        },
        {
            icon: <SiSanity />,
            name: " Sanity"
        },
        {
            icon: <FaGithub />,
            name: "Git & Github"
        },
        {
            icon: <SiFramer />,
            name: "Framer Motion"
        },
        {
            icon: <RiTailwindCssFill />,
            name: "TailwindCss"
        },
        {
            icon: <SiRedux />,
            name: "Redux Toolkit"
        },
    ]

   

  return (
    <main className="md:h-[100vh] w-full flex flex-col gap-y-5 md:gap-y-24 justify-center items-center text-neutral-50 mx-auto py-10 md:py-0">
    <h2 className="text-4xl font-semibold">My skills</h2>

    <div className="flex flex-row flex-wrap justify-center gap-x-5 md:gap-x-0 md:grid md:grid-cols-4 place-items-center items-center w-10/12 mx-auto gap-y-6">
        {skills.map((skill, index) => {
            return <motion.p key={index} className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 hover:bg-white hover:text-black transition-all cursor-pointer">{skill.icon} {skill.name}</motion.p>
        })}
    </div>
    <div>
    <Link href="/" className="flex flex-row justify-center items-center gap-x-1"> <IoIosArrowRoundBack />Go back </Link>
   </div> 
    </main>
  );
}