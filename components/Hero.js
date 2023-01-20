import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <div className="relative px-4 pt-16 mx-auto lg:py-32 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                NEW COLLABORATION
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              OICの多様な学科群がある
              <br className="hidden md:block" />
              からこそ{' '}
              <span className="inline-block text-deep-purple-accent-400">
                できる
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg ">
              ITを活用するビジネス系とITを生み出す情報系が
              スクラムを組み、変化の激しい時代の未来を見据えた、新しい業界の姿を考え提案します。
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row"></div>
        </div>
      </div>
      <div className="inset-y-0 right-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2  md:max-w-2xl sm:max-w-full lg:max-w-full lg:absolute xl:px-0 hidden sm:block">
        <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15 }}
          style={{
            backgroundColor: '#ffff',
          }}
        >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Scene position={[0, -1, 1]} />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}
