import React from 'react'

const Lights = () => {
  return (
   <>
    <ambientLight intensity={0.3} />

    <directionalLight
          castShadow
          position={[5, 5, 5]}
          intensity={1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

<pointLight position={[-3, 2, -3]} intensity={0.4} color="orange" />
   </>
  )
}

export default Lights
