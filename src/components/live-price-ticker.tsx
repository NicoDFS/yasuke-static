'use client'

import Image from 'next/image'
import { useMarketData } from '@/hooks/use-market-data'

// Define which pairs are not yet listed
const UPCOMING_PAIRS = ['YAS-USDT', 'KSWAP-USDT']

export function LivePriceTicker() {
  const { marketData, isLoading, error } = useMarketData()

  if (error) {
    return null // Hide ticker on error
  }

  // Filter out upcoming pairs from the ticker
  const displayData = isLoading 
    ? [] 
    : marketData.filter(market => !UPCOMING_PAIRS.includes(market.symbol))

  // Only duplicate data twice instead of three times to reduce speed
  const scrollData = [...displayData, ...displayData]

  return (
    <div className="w-full overflow-hidden bg-[#0a0b0f]/80 border-y border-zinc-800/50 py-2">
      <div className="flex justify-end">
        <div className="flex animate-slower-ticker whitespace-nowrap">
          {scrollData.map((crypto, index) => {
            const symbol = crypto.symbol.split('-')[0].toLowerCase()
            return (
              <div key={`${crypto.symbol}-${index}`} className="flex items-center px-6">
                <div className="flex items-center space-x-1.5">
                  <div className="w-5 h-5 relative">
                    <Image
                      src={`/images/crypto-icons/${symbol}.png`}
                      alt={symbol.toUpperCase()}
                      width={20}
                      height={20}
                      className="rounded-full"
                      onError={(e) => {
                        // Fallback to a default icon if the image fails to load
                        e.currentTarget.src = '/images/crypto-icons/default.png'
                      }}
                    />
                  </div>
                  <span className="font-medium text-zinc-300 min-w-[70px]">{crypto.symbol.replace('-', '/')}</span>
                  <span className="text-zinc-400 min-w-[80px] text-right">{crypto.price}</span>
                  <span className={`min-w-[60px] text-right ${crypto.change_24h.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                    {crypto.change_24h}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 