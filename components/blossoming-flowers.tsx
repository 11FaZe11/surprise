"use client"

import { useEffect, useState } from "react"

type Flower = {
  id: number
  x: number
  y: number
  emoji: string
  delay: number
  size: number
}

export default function BlossomingFlowers({ count = 10 }: { count?: number }) {
  const [flowers, setFlowers] = useState<Flower[]>([])

  useEffect(() => {
    const flowerEmojis = ["🌸", "🌹", "🌺", "🌻", "🌼"]
    const newFlowers: Flower[] = []

    // Create flowers with random properties
    for (let i = 0; i < count; i++) {
      newFlowers.push({
        id: i,
        x: 10 + Math.random() * 80, // random x position (10-90%)
        y: 20 + Math.random() * 60, // random y position (20-80%)
        emoji: flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)],
        delay: 0.5 + Math.random() * 2, // random delay (0.5-2.5s)
        size: 30 + Math.random() * 40, // random size (30-70px)
      })
    }

    setFlowers(newFlowers)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="absolute opacity-0 animate-blossom"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            fontSize: `${flower.size}px`,
            animationDelay: `${flower.delay}s`,
          }}
        >
          {flower.emoji}
        </div>
      ))}
    </div>
  )
}
