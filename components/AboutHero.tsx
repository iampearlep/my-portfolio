"use client"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import MeImg from '@/public/images/mee.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";


export const AboutHero = () => {


  return (
    <div >
       <div>
         <motion.h1 initial={{ y:100, opacity: 0, scale:0.5 }} animate={{ y:0, opacity:1, scale:1}} transition={{ ease: "easeInOut", duration: 0.5}} className="capitalize text-4xl">Hello</motion.h1>
         <motion.p initial={{ y:100, opacity: 0, scale:0.5 }} animate={{ y:0, opacity:1, scale:1}} transition={{ ease: "easeInOut", delay: 0.4, duration: 0.5}}  className="text-base py-4">I&#39;m Princess, <span className='font-light text-neutral-500'>a self-motivated</span> frontend developer <span className='font-light text-neutral-500'>with a passion for building beautiful, brilliant and functional user interfaces</span> using frontend technologies.</motion.p>
         </div>
         {/* Other pages links */}
         <div className="flex flex-col py-10 gap-y-6">
          <motion.div initial={{ x: -100,  opacity: 0, scale:0.5 }} animate={{ x:0,  opacity:1, scale:1}} transition={{ ease: "easeInOut", delay: 0.6, duration: 0.5}} className="flex flex-row justify-center items-center gap-x-5 w-4/12 hover:text-neutral-500 transition-all">
            <hr className="text-neutral-50 hover:text-neutral-500 w-7/12" />
            <Link href="#projects" className="text-sm">Projects</Link>
          </motion.div>
          <motion.div initial={{ x: -100,  opacity: 0, scale:0.5 }} animate={{ x:0,  opacity:1, scale:1}} transition={{ ease: "easeInOut", delay: 0.8, duration: 0.5}} className="flex flex-row justify-center items-center hover:text-neutral-500 gap-x-5 w-4/12 transition-all">
            <hr className="text-neutral-50 hover:text-neutral-500 w-7/12"  />
            <Link href="/skills"  className="text-sm">Skills</Link>
          </motion.div>
          <motion.div initial={{ x: -100,  opacity: 0, scale:0.5 }} animate={{ x:0,  opacity:1, scale:1}} transition={{ ease: "easeInOut", delay: 0.9, duration: 0.5}} className="flex flex-row justify-center items-center gap-x-5 w-8/12 md:w-7/12 hover:text-neutral-500 transition-all">
            <hr className="text-neutral-50 hover:text-neutral-500 w-5/12" />
            <Link href="/about-me" className="text-sm">More about Me</Link>
          </motion.div>
         </div>
         {/* social links */}
         <motion.div initial={{ y: 100,  opacity: 0, scale:0.85 }} animate={{ y:0,  opacity:1, scale:1}} transition={{ ease: "easeInOut", delay: 1.5, duration: 0.5}} className="flex flex-row gap-x-4 items-center text-xs">
          <div className="w-8 h-5 flex items-center justify-center">
          <Image 
                src={MeImg}
                width={750}
                height={909}
                alt=" image"
                className='w-auto h-auto rounded-full hover:brightness-50 transition-all'
                />
          </div>
          <div className="flex flex-row gap-x-1 items-center justify-center hover:text-neutral-500 transition-all">
          <FaGithub className="w-3 h-3" />
          <Link href="https://github.com/iampearlep">Github</Link>
          <GoArrowUpRight className="w-4 h-4" />
          </div>
          <div className="flex flex-row gap-x-1 items-center justify-center hover:text-neutral-500 transition-all">
          <FaLinkedin className="w-3 h-3" />
          <Link href="https://www.linkedin.com/in/princessenuma/">LinkedIn</Link>
          <GoArrowUpRight className="w-4 h-4" />
          </div>
          <div className="flex flex-row gap-x-1 items-center justify-center hover:text-neutral-500 transition-all">
          <MdAlternateEmail className="w-3 h-3" />
          <Link href="mailto:damilolaprincess4@gmail.com">Email</Link>
          <GoArrowUpRight className="w-4 h-4" />
          </div>
         </motion.div>
    </div>
  )
}

