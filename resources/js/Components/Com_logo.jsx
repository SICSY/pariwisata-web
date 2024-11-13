import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/ImageToStl.com_logo.gltf')
  const meshRef = useRef()
  const [texture, setTexture] = useState(null)

  useEffect(() => {
    // Load texture using THREE.TextureLoader
    const textureLoader = new THREE.TextureLoader()
    textureLoader.load('/foto/logo.png', (loadedTexture) => {
      setTexture(loadedTexture)
      loadedTexture.wrapS = THREE.RepeatWrapping
      loadedTexture.wrapT = THREE.RepeatWrapping
      loadedTexture.minFilter = THREE.LinearFilter
      loadedTexture.magFilter = THREE.LinearFilter
      loadedTexture.anisotropy = 16
      loadedTexture.flipY = false
    }, undefined, (err) => {
      console.error("Error loading texture:", err)
    })
  }, [])

  useEffect(() => {
    if (meshRef.current && texture) {
      // Apply texture to the mesh material once loaded
      meshRef.current.material.map = texture
      meshRef.current.material.needsUpdate = true
    }
  }, [texture])

  return (
    <group {...props} dispose={null}>
      {/* Apply texture to mesh */}
      <mesh ref={meshRef} geometry={nodes.Node1.geometry} material={materials.x1 || new THREE.MeshStandardMaterial()} />
      <mesh geometry={nodes.Node2.geometry} material={materials.x1 || new THREE.MeshStandardMaterial()} />
    </group>
  )
}

useGLTF.preload('/ImageToStl.com_logo.gltf')
