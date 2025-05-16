"use client"

import { useEffect, useState } from "react"

type Petal = {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  emoji: string
  delay: number
  duration: number
  swayAmount: number
}

export default function FallingPetals({ count = 30 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const petalEmojis = ["🌸", "🌷", "💐", "🌹", "🌺", "🌻", "💮", "🏵️", "🌼"]
    const newPetals: Petal[] = []

    // Create initial petals with random properties
    for (let i = 0; i < count; i++) {
      newPetals.push({
        id: i,
        x: Math.random() * 100, // random x position (0-100%)
        y: -20 - Math.random() * 80, // start above the viewport
        size: 16 + Math.random() * 24, // random size (16-40px)
        rotation: Math.random() * 360, // random rotation
        emoji: petalEmojis[Math.floor(Math.random() * petalEmojis.length)],
        delay: Math.random() * 3, // random delay (0-3s)
        duration: 5 + Math.random() * 10, // random duration (5-15s)
        swayAmount: 1 + Math.random() * 3, // random sway amount
      })
    }

    setPetals(newPetals)

    // Add more petals every few seconds
    const interval = setInterval(() => {
      setPetals((prev) => {
        if (prev.length > count * 2) return prev // Limit the number of petals for performance

        const newPetal: Petal = {
          id: Date.now(),
          x: Math.random() * 100,
          y: -20,
          size: 16 + Math.random() * 24,
          rotation: Math.random() * 360,
          emoji: petalEmojis[Math.floor(Math.random() * petalEmojis.length)],
          delay: 0,
          duration: 5 + Math.random() * 10,
          swayAmount: 1 + Math.random() * 3,
        }
        return [...prev, newPetal]
      })
    }, 800)

    return () => clearInterval(interval)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            fontSize: `${petal.size}px`,
            transform: `rotate(${petal.rotation}deg)`,
            animation: `fall ${petal.duration}s linear ${petal.delay}s forwards, sway ${petal.duration / 3}s ease-in-out ${petal.delay}s infinite alternate`,
            animationTimingFunction: "ease-in-out",
          }}
        >
          {petal.emoji}
        </div>
      ))}
    </div>
  )
}
