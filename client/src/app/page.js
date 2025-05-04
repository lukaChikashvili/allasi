"use client"
import { AnimatedText } from "@/components/AnimatedText";
import Experience from "@/components/Experience";
import Lights from "@/components/Lights";
import { Canvas } from "@react-three/fiber";
import { motion } from 'framer-motion'

export default function Home() {
  return (
   <>
    <section className="relative w-full h-screen flex items-center gap-12 justify-between px-12  overflow-hidden ">
     
    <div className="w-[65rem] -mt-36 flex flex-col gap-8">
    <AnimatedText
  text="Discover Your Perfect Fragrance, Fashion & More"
  className="text-6xl font-semibold leading-[5rem]"
  delay={0.6}
/>

  <motion.span initial = {{width: 0}} 
  animate = {{width: "100%"}}
  transition={{duration: 0.9, delay: 1.2, ease: "circIn"}}
   className="w-full h-[0.2px] bg-black"></motion.span>

  <AnimatedText
  text="From Perfumes to Fashion, Find Everything You Love"
  className="text-xl"
  delay={1.2}
/>


<motion.button
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
    delay: 1.6,
  }}
  className="learn-more"
>
  <span className="circle" aria-hidden="true">
    <span className="icon arrow"></span>
  </span>
  <span className="button-text">Start shopping now</span>
</motion.button>
</div>
     

    
      <Canvas className=" w-full  bg-transparent mt-6 rounded-lg  ">
         <Lights />
        <Experience />
      </Canvas>
    
      
     
    
    </section>

    <section className=" w-full h-screen flex items-center gap-12 justify-between px-12 ">
    <AnimatedText
  text="Discover Your Perfect Fragrance, Fashion & More"
  className="text-6xl font-semibold leading-[5rem] w-1/2 m-auto"
  delay={0.6}
/>
    </section>
   </>
  );
}
