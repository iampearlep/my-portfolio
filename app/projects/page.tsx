"use client"
import {  motion } from "framer-motion";
import { Link } from "@/components/Link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function Projects() {
    return (
        <main className="w-11/12 md:w-9/12 h-full flex flex-col gap-y-10 md:gap-y-20  justify-center items-center text-neutral-50 mx-auto py-10 md:py-20">
            <div>
            <motion.h2 initial={{ y:100, opacity: 0, scale:0.5 }} animate={{ y:0, opacity:1, scale:1}} transition={{  type: "spring", duration: 0.3}}  className="text-4xl font-semibold">Projects</motion.h2>
            </div>
           <motion.div initial={{ opacity: 0, scale:0.65 }} animate={{ opacity:1, scale:1}} transition={{ ease: "easeInOut",delay: 0.2, duration: 0.5}} className="mx-auto w-full">
        <Link
          heading="Luxe"
          subheading="NEXTJS, TS, TAILWIND, SANITY, SUPABASE"
          about= "An E-commerce fashion website"
          imgSrc="/images/img1.png"
          href="https://luxe-vtg.vercel.app/"
        />
        <Link
          heading="Utopie"
          subheading="NEXTJS, TS, TAILWIND, FRAMER"
          about= "A Landing page"
          imgSrc="/images/img2.png"
          href="https://utopiepay.com/"
        />
        <Link
          heading="Explore"
          subheading="NEXTJS, TS, TAILWIND, SANITY"
          about= "A Blog website"
          imgSrc="/images/img3.png"
          href="https://blog-site-pink.vercel.app/"
        />
        <Link
          heading="Showflix"
          subheading="NEXTJS, TS, TAILWIND, TMDB API"
          about= "A Movies Website"
          imgSrc="/images/img4.png"
          href="https://showflix-phi.vercel.app/"
        />
        <Link
          heading="Dashboard"
          subheading="NEXTJS, TS, TAILWIND, CHARTJS"
          about= "A Dashboard"
          imgSrc="/images/img5.png"
          href="https://analytics-dashboard-pi-three.vercel.app/"
        />
        <Link
          heading="Hawk Ugc"
          subheading="NEXTJS, TS, TAILWIND, REACT-HOOK-FORM, ZOD"
          about= "A Waitlist signup page"
          imgSrc="/images/img6.png"
          href="https://hawk-ugc.vercel.app/"
        />
        <Link
          heading="SINC"
          subheading="NEXTJS, TS, TAILWIND, FRAMER"
          about= "A Landing page"
          imgSrc="/images/img7.png"
          href="https://sinc-landing-page.vercel.app/"
        />
      </motion.div> 
      <div>
    <a href="/" className="flex flex-row justify-center items-center gap-x-1"> <IoIosArrowRoundBack />Go back </a>
   </div>
        </main>
    )
}