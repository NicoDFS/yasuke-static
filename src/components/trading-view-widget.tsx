"use client"

import React, { useEffect, useRef, memo } from 'react'

function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
    script.type = "text/javascript"
    script.async = true
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "BINANCE:BTCUSDT",
        "interval": "5",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "hide_legend": true,
        "allow_symbol_change": true,
        "calendar": false,
        "height": 800,
        "support_host": "https://www.tradingview.com"
      }`
    
    // Clean up any existing scripts first
    if (container.current) {
      const existingScript = container.current.querySelector('script')
      if (existingScript) {
        container.current.removeChild(existingScript)
      }
    }
    
    // Add the new script
    if (container.current) {
      container.current.appendChild(script)
    }

    return () => {
      if (container.current) {
        const scriptElement = container.current.querySelector('script')
        if (scriptElement) {
          container.current.removeChild(scriptElement)
        }
      }
    }
  }, [])

  return (
    <div className="w-full min-h-[800px]" ref={container}>
      <div className="tradingview-widget-copyright mt-2">
      </div>
    </div>
  )
}

export default memo(TradingViewWidget) 