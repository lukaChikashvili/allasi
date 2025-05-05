"use client";

import { motion } from "framer-motion";

const DURATION = 0.6;
const STAGGER = 0.025;

export const AnimatedText = ({ text, className, delay = 0 }) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
        staggerChildren: STAGGER,
      },
    },
  };

  const child = {
    hidden: {
      clipPath: "inset(100% 0% 0% 0%)", 
      opacity: 0,
    },
    visible: {
      clipPath: "inset(0% 0% 0% 0%)",
      opacity: 1,
      transition: {
        duration: DURATION,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`${className} inline-block overflow-hidden leading-tight`}
      variants={container}
      initial="hidden"
      whileInView="visible"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          variants={child}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
