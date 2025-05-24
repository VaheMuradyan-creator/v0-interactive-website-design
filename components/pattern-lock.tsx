"use client"

import { useEffect, useRef, useState } from "react"

interface PatternLockProps {
  size?: number
  dotCount?: number
  onComplete?: (pattern: number[]) => void
}

export default function PatternLock({ size = 280, dotCount = 3, onComplete }: PatternLockProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [pattern, setPattern] = useState<number[]>([])
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 })

  // Store dot positions and states
  const dotsRef = useRef<{ x: number; y: number; selected: boolean }[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = size
    canvas.height = size

    // Calculate dot positions
    const dotSize = 20
    const padding = size / 10
    const spacing = (size - padding * 2) / (dotCount - 1)

    const dots: { x: number; y: number; selected: boolean }[] = []

    for (let i = 0; i < dotCount; i++) {
      for (let j = 0; j < dotCount; j++) {
        dots.push({
          x: padding + j * spacing,
          y: padding + i * spacing,
          selected: false,
        })
      }
    }

    dotsRef.current = dots

    // Draw initial state
    drawPattern(ctx)

    // Event listeners
    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Check if a dot is clicked
      const dotIndex = findDotIndex(x, y)
      if (dotIndex !== -1) {
        setIsDrawing(true)
        dotsRef.current[dotIndex].selected = true
        setPattern([dotIndex])
        setCurrentPosition({ x, y })
        drawPattern(ctx)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDrawing) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      setCurrentPosition({ x, y })

      // Check if a new dot is selected
      const dotIndex = findDotIndex(x, y)
      if (dotIndex !== -1 && !dotsRef.current[dotIndex].selected) {
        dotsRef.current[dotIndex].selected = true
        setPattern((prev) => [...prev, dotIndex])
      }

      drawPattern(ctx)
    }

    const handleMouseUp = () => {
      if (isDrawing) {
        setIsDrawing(false)

        // If pattern has at least 4 dots, consider it complete
        if (pattern.length >= 4 && onComplete) {
          onComplete(pattern)
        }

        // Reset after a delay
        setTimeout(() => {
          dotsRef.current.forEach((dot) => (dot.selected = false))
          setPattern([])
          drawPattern(ctx)
        }, 1000)
      }
    }

    canvas.addEventListener("mousedown", handleMouseDown)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseup", handleMouseUp)
    canvas.addEventListener("mouseleave", handleMouseUp)

    // Touch events
    canvas.addEventListener("touchstart", (e) => {
      e.preventDefault()
      const touch = e.touches[0]
      const mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      })
      canvas.dispatchEvent(mouseEvent)
    })

    canvas.addEventListener("touchmove", (e) => {
      e.preventDefault()
      const touch = e.touches[0]
      const mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      })
      canvas.dispatchEvent(mouseEvent)
    })

    canvas.addEventListener("touchend", (e) => {
      e.preventDefault()
      const mouseEvent = new MouseEvent("mouseup")
      canvas.dispatchEvent(mouseEvent)
    })

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseup", handleMouseUp)
      canvas.removeEventListener("mouseleave", handleMouseUp)

      canvas.removeEventListener("touchstart", (e) => e.preventDefault())
      canvas.removeEventListener("touchmove", (e) => e.preventDefault())
      canvas.removeEventListener("touchend", (e) => e.preventDefault())
    }
  }, [size, dotCount, pattern, isDrawing, onComplete])

  // Find which dot is at the given position
  const findDotIndex = (x: number, y: number) => {
    const dotRadius = 20
    return dotsRef.current.findIndex((dot) => {
      const distance = Math.sqrt((dot.x - x) ** 2 + (dot.y - y) ** 2)
      return distance <= dotRadius
    })
  }

  // Draw the pattern
  const drawPattern = (ctx: CanvasRenderingContext2D) => {
    const dotRadius = 10
    const selectedDotRadius = 14

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Draw lines between selected dots
    if (pattern.length > 1) {
      ctx.beginPath()
      ctx.strokeStyle = "rgba(255, 255, 255, 0.6)"
      ctx.lineWidth = 5

      const firstDot = dotsRef.current[pattern[0]]
      ctx.moveTo(firstDot.x, firstDot.y)

      for (let i = 1; i < pattern.length; i++) {
        const dot = dotsRef.current[pattern[i]]
        ctx.lineTo(dot.x, dot.y)
      }

      if (isDrawing) {
        ctx.lineTo(currentPosition.x, currentPosition.y)
      }

      ctx.stroke()
    }

    // Draw dots
    dotsRef.current.forEach((dot, index) => {
      ctx.beginPath()

      if (dot.selected) {
        // Draw selected dot
        ctx.fillStyle = "rgba(255, 255, 255, 1)"
        ctx.arc(dot.x, dot.y, selectedDotRadius, 0, Math.PI * 2)

        // Draw outer glow
        ctx.shadowColor = "rgba(255, 255, 255, 0.8)"
        ctx.shadowBlur = 10
      } else {
        // Draw normal dot
        ctx.fillStyle = "rgba(156, 163, 175, 0.5)"
        ctx.arc(dot.x, dot.y, dotRadius, 0, Math.PI * 2)
        ctx.shadowColor = "transparent"
        ctx.shadowBlur = 0
      }

      ctx.fill()

      // Draw dot border
      ctx.beginPath()
      ctx.strokeStyle = dot.selected ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.3)"
      ctx.lineWidth = 2
      ctx.arc(dot.x, dot.y, dot.selected ? selectedDotRadius : dotRadius, 0, Math.PI * 2)
      ctx.stroke()

      // Reset shadow
      ctx.shadowColor = "transparent"
      ctx.shadowBlur = 0
    })
  }

  return <canvas ref={canvasRef} width={size} height={size} className="touch-none" />
}
