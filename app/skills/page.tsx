import Link from "next/link";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiFramer, SiRedux, SiSanity } from "react-icons/si";

export default function Skills() {

  return (
    <main className="md:h-[100vh] w-full flex flex-col gap-y-5 md:gap-y-24 justify-center items-center text-neutral-50 mx-auto py-10 md:py-0">
    <h2 className="text-4xl font-semibold">My skills</h2>
    <div className="flex flex-row flex-wrap justify-center gap-x-5 md:gap-x-0 md:grid md:grid-cols-4 place-items-center items-center w-10/12 mx-auto gap-y-6">
    <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <FaHtml5 />
           HTML
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <FaCss3Alt />
            CSS
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <BiLogoJavascript />
            Javascript
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <BiLogoTypescript />
            Typescript
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <FaReact />
            ReactJs
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <RiNextjsFill />
            NextJs
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <RiSupabaseFill />
        Supabase
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <SiSanity />
        Sanity
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <FaGithub />
        Git & Github
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <SiFramer />
            Framer Motion
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <RiTailwindCssFill />
            TailwindCss
        </p>
        <p className="border flex flex-row justify-center items-center gap-x-2 border-neutral-100 px-4 py-2 ">
        <SiRedux />
            Redux Toolkit
        </p>
    </div>
    <div>
    <Link href="/" className="flex flex-row justify-center items-center gap-x-1"> <IoIosArrowRoundBack />Go back </Link>
   </div>
    </main>
  );
}