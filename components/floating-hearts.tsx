"use client"

import { useEffect, useState } from "react"

type Heart = {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  emoji: string
}

export default function FloatingHearts({ count = 20 }: { count?: number }) {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const heartEmojis = ["❤️", "💖", "💕", "💓", "💗", "💘", "💝"]
    const newHearts: Heart[] = []

    // Create hearts with random properties
    for (let i = 0; i < count; i++) {
      newHearts.push({
        id: i,
        x: 10 + Math.random() * 80, // random x position (10-90%)
        y: 30 + Math.random() * 60, // random y position (30-90%)
        size: 15 + Math.random() * 25, // random size (15-40px)
        delay: Math.random() * 5, // random delay (0-5s)
        duration: 8 + Math.random() * 7, // random duration (8-15s)
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      })
    }

    setHearts(newHearts)

    // Add more hearts periodically
    const interval = setInterval(() => {
      setHearts((prev) => {
        if (prev.length > count * 1.5) return prev // Limit the number of hearts for performance

        const newHeart: Heart = {
          id: Date.now(),
          x: 10 + Math.random() * 80,
          y: 70 + Math.random() * 20, // Start from lower part of the screen
          size: 15 + Math.random() * 25,
          delay: 0,
          duration: 8 + Math.random() * 7,
          emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        }
        return [...prev, newHeart]
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [count])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            bottom: `${heart.y}%`,
            fontSize: `${heart.size}px`,
            animation: `float ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
            opacity: 0,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  )
}
