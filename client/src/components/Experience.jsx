import { Float,  Stars,  useGLTF, useMatcapTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import React, { useEffect, useRef } from 'react'
import { MeshMatcapMaterial, TextureLoader } from 'three';

const Experience = () => {
    const model = useGLTF('./model.glb');
    const matcap = useLoader(TextureLoader, './reflect.jpg');
    const matcap2 = useLoader(TextureLoader, './gold.jpg');

    const model1Ref = useRef();
    const model2Ref = useRef();

    useEffect(() => {
        if (!matcap || !matcap2) return;
    
        const setupMaterial = (model, matcap) => {
          model.traverse((child) => {
            if (child.isMesh && child.name === 'Object_6') {
              child.material = new MeshMatcapMaterial({ matcap });
              child.material.needsUpdate = true;
            }
          });
        };
    
        if (model1Ref.current) setupMaterial(model1Ref.current, matcap);
        if (model2Ref.current) setupMaterial(model2Ref.current, matcap2);
      }, [matcap, matcap2]);

  return (
   <>

<Float>
        <primitive
          object={model.scene.clone()}
          scale={1.4}
          position={[3.5, 0, 0]}
          rotation={[0, -1, 0]}
          ref={model1Ref}
        />
      </Float>

      
      <Float>
        <primitive
          object={model.scene.clone()}
          scale={1.4}
          position={[-1, 0, -1.3]}
          rotation={[0, 0.7, 0]}
          ref={model2Ref}
        />
      </Float>
   </>
  )
}

export default Experience
