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

  // Duplicate data for continuous scrolling
  const scrollData = [...displayData, ...displayData, ...displayData]

  return (
    <div className="w-full overflow-hidden bg-[#0a0b0f]/80 border-y border-zinc-800/50 py-2">
      <div className="flex justify-end">
        <div className="flex animate-ticker whitespace-nowrap">
          {scrollData.map((crypto, index) => (
            <div key={`${crypto.symbol}-${index}`} className="flex items-center space-x-2 px-8 text-sm">
              <Image
                src={`/images/crypto-icons/${crypto.symbol.split('-')[0].toLowerCase()}.png`}
                alt={crypto.symbol.split('-')[0]}
                width={20}
                height={20}
                className="rounded-full"
              />
              <span className="font-medium text-zinc-300">{crypto.symbol.replace('-', '/')}</span>
              <span className="text-zinc-400">{crypto.price}</span>
              <span className={crypto.change_24h.startsWith('-') ? 'text-red-500' : 'text-green-500'}>
                {crypto.change_24h}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 