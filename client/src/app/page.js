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
  text="More Than a Look—It's a Lifestyle "
  className="text-7xl font-bold leading-[5rem] "
  delay={0.6}
/>

  <motion.span initial = {{width: 0}} 
  whileInView = {{width: "100%"}}
  transition={{duration: 0.9, delay: 1.2, ease: "circIn"}}
   className="w-full h-[0.2px] bg-black"></motion.span>

  <AnimatedText
  text="Shop signature fragrances, statement pieces, and everyday essentials all in one place. "
  className="text-2xl w-[500px]"
  delay={1.2}
/>


<motion.button
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
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
  <span className="button-text"> Start shopping now</span>
</motion.button>
</div>
     

    
      <Canvas className=" w-full  bg-gray-300 mt-6 rounded-lg  ">
         <Lights />
        <Experience />
      </Canvas>
    
      
     
    
    </section>

    <section className=" w-full flex flex-col gap-4 h-screen px-36 py-24 ">
    <AnimatedText
  text="choose high value fragrances"
  className="text-2xl text-slate-600"
  delay={0.6}
/>

<motion.span initial = {{width: 0}} 
  whileInView = {{width: "100%"}}
  transition={{duration: 0.9, delay: 1.2, ease: "circIn"}}
   className="w-full h-[0.2px] bg-black"></motion.span>

    </section>
  
</>
  );
}
