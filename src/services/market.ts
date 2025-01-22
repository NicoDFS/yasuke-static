import { z } from 'zod'

const marketDataSchema = z.object({
  symbol: z.string(),
  price: z.string(),
  change_24h: z.string(),
  volume_24h: z.string(),
  high_24h: z.string(),
  low_24h: z.string()
})

export type MarketData = z.infer<typeof marketDataSchema>

interface RawMarketData {
  price?: string | number
  last_price?: string | number
  price_24h?: string | number
  price_change_percent?: string | number
  percent_change?: string | number
  change?: string | number
  volume?: string | number
  high?: string | number
  high_24hr?: string | number
  low?: string | number
  low_24hr?: string | number
}

interface PairsData {
  [key: string]: RawMarketData
}

const BASE_URL = 'https://yasuke.exchange/api/v1'

// Helper function to safely convert string or number to number
function toNumber(value: string | number | undefined): number {
  if (typeof value === 'undefined') return 0
  if (typeof value === 'number') return value
  const num = Number(value)
  return isNaN(num) ? 0 : num
}

// Add retry logic for API calls
async function fetchWithRetry(url: string, retries = 3): Promise<Response> {
  console.log('Fetching data from:', url)
  
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        next: { revalidate: 60 },
        headers: {
          'Accept': 'application/json'
        }
      })
      
      console.log('Response status:', response.status)
      
      if (response.ok) {
        const contentType = response.headers.get('content-type')
        console.log('Content-Type:', contentType)
        return response
      }
      
      const errorText = await response.text()
      console.error('Error response:', errorText)
      
    } catch (error) {
      console.error(`Attempt ${i + 1} failed:`, error)
      if (i === retries - 1) throw error
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
    }
  }
  throw new Error('Failed to fetch after retries')
}

// Helper function to format numbers
function formatNumber(value: number | string | null | undefined, isPrice = false, isPercentage = false): string {
  if (value === null || value === undefined) return isPrice ? '$0.00' : isPercentage ? '0.00%' : '0'
  
  const cleanValue = typeof value === 'string' ? value.replace(/[$,]/g, '') : value.toString()
  const num = parseFloat(cleanValue)
  if (isNaN(num)) return isPrice ? '$0.00' : isPercentage ? '0.00%' : '0'
  
  if (isPrice) {
    if (num >= 1) {
      return `$${num.toLocaleString('en-US', { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      })}`
    } else if (num >= 0.01) {
      return `$${num.toFixed(4)}`
    } else if (num >= 0.0001) {
      return `$${num.toFixed(6)}`
    } else if (num > 0) {
      return `$${num.toFixed(8)}`
    } else {
      return '$0.00'
    }
  }
  
  if (isPercentage) {
    return `${num.toFixed(2)}%`
  }
  
  return num.toLocaleString('en-US', { 
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })
}

export async function getMarketData(): Promise<MarketData[]> {
  try {
    const response = await fetchWithRetry(`${BASE_URL}/home-page/`)
    const data = await response.json()
    console.log('Received market data:', data)
    
    const pairs_data = (data.pairs_data || {}) as PairsData
    
    const marketData = Object.entries(pairs_data).map(([symbol, data]) => {
      console.log(`Raw data for ${symbol}:`, data)
      
      const rawPrice = toNumber(data.price || data.last_price || 0)
      
      let rawChange = 0
      if (data.price_24h !== undefined) {
        rawChange = toNumber(data.price_24h)
      } else if (data.price_change_percent !== undefined) {
        rawChange = toNumber(data.price_change_percent)
      } else if (data.percent_change !== undefined) {
        rawChange = toNumber(data.percent_change)
      } else if (data.change !== undefined) {
        rawChange = toNumber(data.change)
      }
      
      console.log(`Extracted change for ${symbol}:`, rawChange)
      
      return {
        symbol: symbol.replace('/', '-'),
        price: formatNumber(rawPrice, true),
        change_24h: formatNumber(rawChange, false, true),
        volume_24h: formatNumber(data.volume || 0),
        high_24h: formatNumber(data.high || data.high_24hr || 0, true),
        low_24h: formatNumber(data.low || data.low_24hr || 0, true)
      }
    })
    
    const validData = z.array(marketDataSchema).safeParse(marketData)
    if (!validData.success) {
      console.error('Invalid market data format:', validData.error)
      return []
    }
    
    return validData.data
  } catch (error) {
    console.error('Error fetching market data:', error)
    return []
  }
}

export async function getMarketDataForSymbol(symbol: string): Promise<MarketData | null> {
  try {
    const formattedSymbol = symbol.replace('/', '-')
    const response = await fetchWithRetry(`${BASE_URL}/home-page/`)
    const data = await response.json()
    console.log(`Received data for ${formattedSymbol}:`, data)
    
    const pairs_data = (data.pairs_data || {}) as PairsData
    const pairData = pairs_data[formattedSymbol.replace('-', '/')] || null
    if (!pairData) return null
    
    const rawPrice = toNumber(pairData.price || pairData.last_price || 0)
    
    let rawChange = 0
    if (pairData.price_24h !== undefined) {
      rawChange = toNumber(pairData.price_24h)
    } else if (pairData.price_change_percent !== undefined) {
      rawChange = toNumber(pairData.price_change_percent)
    } else if (pairData.percent_change !== undefined) {
      rawChange = toNumber(pairData.percent_change)
    } else if (pairData.change !== undefined) {
      rawChange = toNumber(pairData.change)
    }
    
    console.log(`Extracted change for ${formattedSymbol}:`, rawChange)
    
    const marketData = {
      symbol: formattedSymbol,
      price: formatNumber(rawPrice, true),
      change_24h: formatNumber(rawChange, false, true),
      volume_24h: formatNumber(pairData.volume || 0),
      high_24h: formatNumber(pairData.high || pairData.high_24hr || 0, true),
      low_24h: formatNumber(pairData.low || pairData.low_24hr || 0, true)
    }
    
    const validData = marketDataSchema.safeParse(marketData)
    if (!validData.success) {
      console.error(`Invalid market data format for ${formattedSymbol}:`, validData.error)
      return null
    }
    
    return validData.data
  } catch (error) {
    console.error(`Error fetching market data for ${symbol}:`, error)
    return null
  }
} 