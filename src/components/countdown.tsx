"use client"

import { useEffect, useState } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const targetDate = new Date('2025-02-03T00:00:00Z')

    function calculateTimeLeft() {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60)
        })
      }
    }

    // Calculate immediately
    calculateTimeLeft()

    // Update every minute
    const timer = setInterval(calculateTimeLeft, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center space-y-1">
      <p className="text-sm text-zinc-400">Starts In</p>
      <div className="flex justify-center gap-3 text-lg font-bold">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-xs text-zinc-400">Days</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-xs text-zinc-400">Hours</span>
        </div>
        <span>:</span>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-xs text-zinc-400">Minutes</span>
        </div>
      </div>
    </div>
  )
} 