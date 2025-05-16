"use client"

import { useState, useEffect } from "react"
import { Heart, Sparkles } from "lucide-react"
import FallingPetals from "@/components/falling-petals"
import BlossomingFlowers from "@/components/blossoming-flowers"
import FloatingHearts from "@/components/floating-hearts"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function RomanticSurprise() {
  const [showSurprise, setShowSurprise] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (showSurprise) {
      const timer = setTimeout(() => {
        setShowMessage(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [showSurprise])

  const handleReveal = () => {
    setShowSurprise(true)
    // Add haptic feedback for mobile devices if supported
    if (navigator.vibrate) {
      navigator.vibrate(200)
    }
  }

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-1000 ease-in-out p-4 overflow-hidden ${
        showSurprise ? "bg-pink-100" : "bg-gradient-to-b from-white to-rose-50"
      }`}
    >
      <div className="relative z-10 max-w-md mx-auto text-center px-4">
        {!showSurprise ? (
          <div className="animate-fadeIn">
            <div className="mb-6 flex justify-center">
              <Heart className="h-12 w-12 text-pink-500 animate-pulse" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">For My Special Someone</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
              I have a sweet surprise waiting just for you...
              <span className="text-pink-500 ml-1">💖</span>
            </p>
            <Button
              onClick={handleReveal}
              className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              <Sparkles className="mr-2 h-5 w-5 animate-twinkle" />
              Click Me 💝
            </Button>
          </div>
        ) : (
          <div
            className={`transition-all duration-1000 ease-out ${showMessage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-pink-600">I Love You! 💖</h1>
            <p className="text-xl mb-6 text-pink-700 leading-relaxed">You make every moment magical ✨</p>
            <div className="text-4xl mb-8 flex flex-wrap justify-center gap-2">
              <span className="animate-bounce-slow">💖</span>
              <span className="animate-bounce-delayed">🌸</span>
              <span className="animate-bounce-slow">🌷</span>
              <span className="animate-bounce-delayed">💐</span>
              <span className="animate-bounce-slow">🌹</span>
              <span className="animate-bounce-delayed">🥰</span>
              <span className="animate-bounce-slow">😍</span>
              <span className="animate-bounce-delayed">✨</span>
            </div>
            <p className="text-lg text-pink-700 italic mb-8">"In a world full of people, my heart chose you."</p>
            <Button
              onClick={() => {
                setShowSurprise(false)
                setShowMessage(false)
              }}
              className="mt-4 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              <Heart className="mr-2 h-4 w-4" /> Start Over
            </Button>
          </div>
        )}
      </div>

      {showSurprise && (
        <>
          <FallingPetals count={isMobile ? 30 : 50} />
          <BlossomingFlowers count={isMobile ? 5 : 10} />
          <FloatingHearts count={isMobile ? 15 : 25} />
        </>
      )}
    </main>
  )
}
