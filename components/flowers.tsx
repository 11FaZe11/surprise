"use client"

import { useEffect, useState } from "react"

type Flower = {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  emoji: string
  delay: number
  duration: number
}

export default function Flowers() {
  const [flowers, setFlowers] = useState<Flower[]>([])

  useEffect(() => {
    const flowerEmojis = ["🌸", "🌷", "💐", "🌹", "🌺", "🌻", "💮", "🏵️", "🌼"]
    const newFlowers: Flower[] = []

    // Create 50 flowers with random properties
    for (let i = 0; i < 50; i++) {
      newFlowers.push({
        id: i,
        x: Math.random() * 100, // random x position (0-100%)
        y: -20 - Math.random() * 80, // start above the viewport
        size: 20 + Math.random() * 30, // random size (20-50px)
        rotation: Math.random() * 360, // random rotation
        emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
        delay: Math.random() * 3, // random delay (0-3s)
        duration: 5 + Math.random() * 10, // random duration (5-15s)
      })
    }

    setFlowers(newFlowers)

    // Add more flowers every few seconds
    const interval = setInterval(() => {
      setFlowers((prev) => {
        const newFlower: Flower = {
          id: Date.now(),
          x: Math.random() * 100,
          y: -20,
          size: 20 + Math.random() * 30,
          rotation: Math.random() * 360,
          emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
          delay: 0,
          duration: 5 + Math.random() * 10,
        }
        return [...prev, newFlower]
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute animate-fall"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            fontSize: `${flower.size}px`,
            transform: `rotate(${flower.rotation}deg)`,
            animationDelay: `${flower.delay}s`,
            animationDuration: `${flower.duration}s`,
          }}
        >
          {flower.emoji}
        </div>
      ))}
    </div>
  )
}
