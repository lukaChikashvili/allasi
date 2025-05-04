import { Float,  useGLTF, useMatcapTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react'
import { MeshMatcapMaterial, TextureLoader } from 'three';

const Experience = () => {
    const model = useGLTF('./model.glb');
    const matcap = useLoader(TextureLoader, './reflect.jpg');


    useEffect(() => {
        if (!matcap) return;

       model.scene.traverse((child) => {
      if (child.isMesh) {
        console.log(child.name)
         if(child.name === "Object_6") {
            child.material = new MeshMatcapMaterial({ matcap })
            child.material.needsUpdate = true
         }

       
        
       
      }
    })
    }, [model,matcap])

  return (
   <>

   <Float>
   <primitive object={model.scene} scale = {1.4} position = {[5, 0, 0]} rotation = {[0, -1, 0]} />
   </Float>
   </>
  )
}

export default Experience
