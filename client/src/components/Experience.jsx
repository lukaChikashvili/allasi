import { Environment, useGLTF } from '@react-three/drei'
import React, { useEffect } from 'react'

const Experience = () => {
    const model = useGLTF('./car.glb');

    useEffect(() => {
        model.scene.traverse((child) => {
            if(child.isMesh) {
                
                console.log(child.name);

               
            }
        })
    }, [model])

  return (
    <>
  
  <primitive object={model.scene} />

    </>
  )
}

export default Experience
