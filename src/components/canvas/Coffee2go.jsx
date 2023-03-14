import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import shadowImage from "./shadow2.png";

import CanvasLoader from '../Loader';

export function CoffeeCanvas() {
  const coffee = useGLTF('./coffee2go/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.05} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[0, 10, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={1024}
      />
      <primitive
        object={coffee.scene}
        scale={2.55}
        position={[0, -3.25, -1.5]}

        rotation={[-0.2, -0.1, -0.1]}
      />
    </mesh>
  );
}

export function ComputersCanvas() {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={0.9}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}


// export default function MyCanvas() {
//   return (

//     <div className="relative" style={{ height: "500px", left: "350px", top: "-180px" }}>
//     <Canvas
//       frameloop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <ComputersCanvas />
//         <CoffeeCanvas />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//     </div>
//   );
// }
// export of 3d coffe with shadow attatched

export default function MyCanvas() {
  return (
    <div className="relative" style={{ height: "80vh", width: "80vw" }}>
      <div
        className="absolute inset-0 flex items-end justify-end z-10"
        style={{ height: "80%", width: "80%", margin: "auto" }}
      >
        <Canvas
          frameloop="demand"
          shadows
          camera={{ position: [20, 3, 5], fov: 25 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <ComputersCanvas />
            <CoffeeCanvas />
          </Suspense>

          <Preload all />
        </Canvas>
      </div>

      <img
        src={shadowImage}
        alt="Shadow"
        className="absolute bottom-10 right-100 left-80 w-full h-auto"
        style={{ height: "40vh", width: "20vw"  }}
      />
    </div>
  );
}