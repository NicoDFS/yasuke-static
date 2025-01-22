'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useMarketData } from '@/hooks/use-market-data'

// Popular trading pairs to display (using correct format)
const POPULAR_PAIRS = [
  'BTC-USDT',
  'ETH-USDT',
  'BNB-USDT',
  'TRX-USDT',
  'KLC-USDT'
]

// Pairs that are not yet listed but should be shown
const UPCOMING_PAIRS = [
  'YAS-USDT',
  'KSWAP-USDT'
]

export function MarketOverview() {
  const { marketData, isLoading } = useMarketData()

  // Filter and sort market data for popular pairs
  const popularMarkets = [...POPULAR_PAIRS, ...UPCOMING_PAIRS].map(symbol => {
    const market = marketData.find(m => m.symbol === symbol)
    const isUpcoming = UPCOMING_PAIRS.includes(symbol)

    return {
      symbol,
      price: isUpcoming ? '--' : (market?.price || '0.00'),
      change_24h: isUpcoming ? '--' : (market?.change_24h || '0.00%'),
      volume_24h: isUpcoming ? '--' : (market?.volume_24h || '0'),
      isUpcoming
    }
  })

  return (
    <div className="glass-dark rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Markets</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3 text-left">Currency</th>
              <th className="px-4 py-3 text-right">Price</th>
              <th className="px-4 py-3 text-right">24h Change</th>
              <th className="px-4 py-3 text-right">24h Volume</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {popularMarkets.map((market) => (
              <tr key={market.symbol} className="border-b hover:bg-muted/80">
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={`/images/crypto-icons/${market.symbol.split('-')[0].toLowerCase()}.png`}
                      alt={market.symbol.split('-')[0]}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <div className="flex items-center gap-2">
                      <span>{market.symbol.replace('-', '/')}</span>
                      {market.isUpcoming && (
                        <span className="px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-500 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-right">
                  {isLoading ? '...' : market.price === '--' ? '--' : `${market.price}`}
                </td>
                <td className={`px-4 py-3 text-right ${
                  market.change_24h === '--' ? '' :
                  market.change_24h.startsWith('-') ? 'text-red-500' : 'text-green-500'
                }`}>
                  {isLoading ? '...' : market.change_24h}
                </td>
                <td className="px-4 py-3 text-right">
                  {isLoading ? '...' : market.volume_24h === '--' ? '--' : `$${market.volume_24h}`}
                </td>
                <td className="px-4 py-3 text-right">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    asChild
                    disabled={market.isUpcoming}
                  >
                    <Link href={market.isUpcoming ? '#' : `/account/trade/${market.symbol}`}>
                      {market.isUpcoming ? 'Coming Soon' : 'Trade'}
                    </Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 