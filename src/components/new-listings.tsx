'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useMarketData } from '@/hooks/use-market-data'

const NEW_LISTINGS = [
  {
    name: 'KalyChain',
    symbol: 'KLC-USDT',
    displaySymbol: 'KLC/USDT',
    icon: '/images/crypto-icons/klc.png',
    isListed: true
  },
  {
    name: 'KalySwap',
    symbol: 'KSWAP-USDT',
    displaySymbol: 'KSWAP/USDT',
    icon: '/images/crypto-icons/kswap.png',
    isListed: false
  }
]

export function NewListings() {
  const { marketData, isLoading } = useMarketData()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {NEW_LISTINGS.map((listing) => {
        const market = marketData.find(m => m.symbol === listing.symbol)
        const displayData = {
          price: listing.isListed ? (market?.price || '0.00') : '--',
          change_24h: listing.isListed ? (market?.change_24h || '0.00%') : '--',
          volume_24h: listing.isListed ? (market?.volume_24h || '0') : '--'
        }

        return (
          <div key={listing.symbol} className="group relative col-span-1">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-dark rounded-2xl p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={listing.icon}
                    alt={listing.symbol.split('-')[0]}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold">{listing.name}</h4>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        listing.isListed 
                          ? 'bg-green-500/20 text-green-500'
                          : 'bg-blue-500/20 text-blue-500'
                      }`}>
                        {listing.isListed ? 'New' : 'Coming Soon'}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400">{listing.displaySymbol}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">Price</span>
                  <span className="font-medium">
                    {isLoading ? '...' : displayData.price === '--' ? '--' : `${displayData.price}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">24h Change</span>
                  <span className={`font-medium ${
                    displayData.change_24h === '--' ? '' :
                    displayData.change_24h.startsWith('-') ? 'text-red-500' : 'text-green-500'
                  }`}>
                    {isLoading ? '...' : displayData.change_24h}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-400">24h Volume</span>
                  <span className="font-medium">
                    {isLoading ? '...' : displayData.volume_24h === '--' ? '--' : `$${displayData.volume_24h}`}
                  </span>
                </div>
                <Button 
                  className="w-full bg-[#1d1e24] text-zinc-100 hover:bg-[#1d1e24]/80" 
                  asChild
                  disabled={!listing.isListed}
                >
                  <Link href={listing.isListed ? `/account/trade/${listing.symbol}` : '#'}>
                    {listing.isListed ? 'Trade Now' : 'Coming Soon'}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
} 