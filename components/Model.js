/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Yury.Petrov (https://sketchfab.com/Yury.Petrov)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/magic-book-561c39dc6fef4a2fbaae7feac18828c8
title: Magic book
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/model.gltf');
  const { actions } = useAnimations(animations, group);
  console.log(actions);
  useEffect(() => {
    actions['Take 001'].play();
  });
  return (
    <group scale={0.3}>
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0}
          >
            <group
              name="a160a61c801d4348a7f7ea8315d4f505fbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group
                    name="book_body"
                    position={[-19.3, -15.88, 0.96]}
                    rotation={[-1.31, 0, 0]}
                  >
                    <group name="Object_5" position={[19.3, 0, 15.88]}>
                      <mesh
                        name="1"
                        geometry={nodes['1'].geometry}
                        material={materials.book}
                        morphTargetDictionary={nodes['1'].morphTargetDictionary}
                        morphTargetInfluences={nodes['1'].morphTargetInfluences}
                      />
                    </group>
                    <group
                      name="Plane001"
                      position={[16.88, 145.05, 133.75]}
                      rotation={[1.31, 0, 0]}
                      scale={0.9}
                    >
                      <mesh
                        name="0"
                        geometry={nodes['0'].geometry}
                        material={materials.alphabet}
                        morphTargetDictionary={nodes['0'].morphTargetDictionary}
                        morphTargetInfluences={nodes['0'].morphTargetInfluences}
                      />
                    </group>
                  </group>
                  <group
                    name="shine_001"
                    position={[-20.16, 102.56, -86.96]}
                    scale={0.01}
                  >
                    <mesh
                      name="shine_001_star_0"
                      geometry={nodes.shine_001_star_0.geometry}
                      material={materials.star}
                    />
                  </group>
                  <group
                    name="shine_002"
                    position={[64.16, 87.15, -88.98]}
                    scale={0.01}
                  >
                    <mesh
                      name="shine_002_star_0"
                      geometry={nodes.shine_002_star_0.geometry}
                      material={materials.star}
                    />
                  </group>
                  <group
                    name="shine_003"
                    position={[-54.81, 69.27, -128.57]}
                    scale={0.01}
                  >
                    <mesh
                      name="shine_003_star_0"
                      geometry={nodes.shine_003_star_0.geometry}
                      material={materials.star}
                    />
                  </group>
                  <group
                    name="shine_004"
                    position={[13.51, -10.38, -117.29]}
                    scale={0.01}
                  >
                    <mesh
                      name="shine_004_star_0"
                      geometry={nodes.shine_004_star_0.geometry}
                      material={materials.star}
                    />
                  </group>
                  <group
                    name="shine_005"
                    position={[-94.69, 13.26, -83.67]}
                    scale={0.01}
                  >
                    <mesh
                      name="shine_005_star_0"
                      geometry={nodes.shine_005_star_0.geometry}
                      material={materials.star}
                    />
                  </group>
                  <group
                    name="shine_006"
                    position={[-81.39, 165.46, -96.71]}
                    scale={0.01}
                  >
                    <mesh
                      name="shine_006_star_0"
                      geometry={nodes.shine_006_star_0.geometry}
                      material={materials.star}
                    />
                  </group>
                  <group
                    name="shine_007"
                    position={[42.47, 204.84, -128.5]}
                    scale={0.01}
                  >
                    <mesh
                      name="shine_007_star_0"
                      geometry={nodes.shine_007_star_0.geometry}
                      material={materials.star}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/model.gltf');
