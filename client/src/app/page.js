"use client"
import Experience from "@/components/Experience";
import Lights from "@/components/Lights";
import { Canvas } from "@react-three/fiber";


export default function Home() {
  return (
   <>
    <section className="relative w-full h-screen  overflow-hidden ">
     
      l<Canvas className=" w-full -mt-12 ">
         <Lights />
        <Experience />
      </Canvas>
      
      
     
    
    </section>
   </>
  );
}
