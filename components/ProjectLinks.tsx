"use client"

import {  motion, } from "framer-motion";
import { Link } from "./Link";

export const ProjectLinks = () => {
  return (
    <section className="">
      <motion.div initial={{ opacity: 0, scale:0.5 }} animate={{ opacity:1, scale:1}} transition={{ ease: "easeInOut", delay: 0.9, duration: 0.45}} className="mx-auto w-full">
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
          about= "A fintech Landing page"
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
        
      </motion.div>
    </section>
  );
};