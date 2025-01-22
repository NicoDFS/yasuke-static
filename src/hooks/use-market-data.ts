'use client'

import { useState, useEffect } from 'react'
import { MarketData, getMarketData } from '@/services/market'

export function useMarketData() {
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true

    async function fetchData() {
      try {
        const data = await getMarketData()
        if (mounted) {
          setMarketData(data)
          setError(null)
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to fetch market data')
          console.error('Error in useMarketData:', err)
        }
      } finally {
        if (mounted) {
          setIsLoading(false)
        }
      }
    }

    // Initial fetch
    fetchData()

    // Set up polling every 30 seconds
    const interval = setInterval(fetchData, 30000)

    return () => {
      mounted = false
      clearInterval(interval)
    }
  }, [])

  return {
    marketData,
    isLoading,
    error
  }
} 