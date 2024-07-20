"use client"
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import  { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const Link = ({ heading, imgSrc, subheading, about, href }: { heading: string, imgSrc: any, subheading: string, about: string, href: string }) => {
    const ref = useRef(null);
  
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);
  
    return (
      <motion.a
        href={href}
        ref={ref}
        target="blank"
        initial="initial"
        whileHover="whileHover"
        className="group relative flex items-center justify-between border-b-2 hover:border-neutral-700 py-3 transition-colors duration-500 border-neutral-50 md:py-5"
      >
        <div>
          <motion.span
            variants={{
              initial: { x: 0 },
              whileHover: { x: -16 },
            }}
            transition={{
              type: "spring",
              staggerChildren: 0.075,
              delayChildren: 0.25,
            }}
            className="relative z-10 block text-2xl font-bold group-hover:text-neutral-500 transition-colors duration-500 text-neutral-50 md:text-3xl"
          >
            {heading.split("").map((l, i) => (
              <motion.span
                variants={{
                  initial: { x: 0 },
                  whileHover: { x: 16 },
                }}
                transition={{ type: "spring" }}
                className="inline-block"
                key={i}
              >
                {l}
              </motion.span>
            ))}
          </motion.span>
          <span className="relative z-10 mt-1 block text-[0.65rem] group-hover:text-neutral-500 transition-colors duration-500 text-neutral-50">
            {subheading}
          </span>
          <span className="relative z-10 mt-1 block text-[0.55rem] group-hover:text-neutral-500 transition-colors duration-500 text-neutral-50">
            {about}
          </span>
        </div>
  
        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "12.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-0 h-20 w-32 rounded-lg object-cover md:h-40 md:w-64"
          alt={`Image representing a link for ${heading}`}
        />
  
        <motion.div
          variants={{
            initial: {
              x: "25%",
              opacity: 0,
            },
            whileHover: {
              x: "0%",
              opacity: 1,
            },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 p-2"
        >
          <FiArrowRight className="text-2xl text-neutral-50" />
        </motion.div>
      </motion.a>
    );
  };