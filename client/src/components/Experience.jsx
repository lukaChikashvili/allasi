import { useGLTF } from '@react-three/drei'
import React from 'react'

const Experience = () => {
    const model = useGLTF('./car.glb');

  return (
    <>
  <primitive object={model.scene} />
    </>
  )
}

export default Experience
