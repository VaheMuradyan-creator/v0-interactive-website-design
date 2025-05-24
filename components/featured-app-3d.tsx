"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text3D, Html, useGLTF } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Download, Info } from "lucide-react"

function AppModel() {
  const { scene } = useGLTF("/assets/3d/duck.glb")

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <primitive object={scene} scale={2} position={[0, -1, 0]} />
    </Float>
  )
}

function AppTitle() {
  return (
    <Float position={[0, 1.5, 0]} rotation={[0, -0.2, 0]} speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text3D font="/fonts/Inter_Bold.json" size={0.5} height={0.1} curveSegments={12}>
        Featured App
        <meshStandardMaterial
          color="#ffffff"
          emissive="#cccccc"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Text3D>
    </Float>
  )
}

function AppInfo() {
  return (
    <Html position={[0, 0, 0]} transform>
      <div className="w-64 p-4 bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-800 shadow-xl">
        <h3 className="text-lg font-bold text-white mb-2">PhotoEditor Pro</h3>
        <p className="text-sm text-gray-300 mb-4">
          Professional photo editing with AI-powered features and intuitive controls.
        </p>
        <div className="flex space-x-2">
          <Button
            size="sm"
            className="bg-gray-700 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900"
          >
            <Download className="mr-1 h-3 w-3" />
            Install
          </Button>
          <Button size="sm" variant="outline" className="border-gray-700 hover:bg-gray-800 text-white">
            <Info className="mr-1 h-3 w-3" />
            Details
          </Button>
        </div>
      </div>
    </Html>
  )
}

export default function FeaturedApp3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={["#0f1015"]} />

      <AppModel />
      <AppTitle />
      <AppInfo />

      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow color="#4f46e5" />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} castShadow color="#ec4899" />
      <Environment preset="city" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  )
}
