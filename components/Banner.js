import React, { Suspense } from 'react';
import { BiChevronsDown } from 'react-icons/bi';
import Books from './Books';
import Typed from 'react-typed';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Drei } from '@react-three/drei';

function Banner() {
  return (
    <div className="text-center mt-10">
      <p className="text-6xl font-semibold font-mono text-blue-400">
        OIC LIBRARY
      </p>
      <p>岡山情報ビジネス学院</p>

      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] mb-12">
        <Canvas camera={{ position: [0.5, 15, 15], fov: 20 }}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 6, 2]} intensity={1} />
          <Suspense fallback={null}>
            <Books position={[0.015, 0.5, -0.5]} />
          </Suspense>
        </Canvas>

        <div className="absolute top-1/2 w-full text-center ">
          <button className="text-blue-500  bg-white px-6 py-3 mt-24 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-200 transition duration-150">
            <Typed
              strings={[
                'おはようございます。',
                'ようこそ OIC Library ',
                'ここで本のお勧め',
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            >
              <input type="text" />
            </Typed>
          </button>
        </div>
        <div className="-mt-36 text-3xl text-center text-gray-500">
          <button>
            <BiChevronsDown style=" --fa-bounce-start-scale-x: 1; --fa-bounce-start-scale-y: 1; --fa-bounce-jump-scale-x: 1; --fa-bounce-jump-scale-y: 1; --fa-bounce-land-scale-x: 1; --fa-bounce-land-scale-y: 1; " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
