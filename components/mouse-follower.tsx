"use client"

import { useEffect, useState } from "react"

export default function MouseFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", updateMousePosition)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Large outer circle */}
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          width: "150px",
          height: "150px",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          transform: `translate(${position.x - 75}px, ${position.y - 75}px)`,
          transition: "transform 0.15s ease-out",
        }}
      />

      {/* Medium middle circle */}
      <div
        className="fixed pointer-events-none z-50 rounded-full mix-blend-difference"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Small inner circle */}
      <div
        className="fixed pointer-events-none z-50 rounded-full bg-white mix-blend-difference"
        style={{
          width: "8px",
          height: "8px",
          transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
          transition: "transform 0.05s linear",
        }}
      />
    </>
  )
}
