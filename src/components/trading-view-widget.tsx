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
    
    // Store container.current in a variable to avoid the exhaustive deps warning
    const currentContainer = container.current
    
    // Clean up any existing scripts first
    if (currentContainer) {
      const existingScript = currentContainer.querySelector('script')
      if (existingScript) {
        currentContainer.removeChild(existingScript)
      }
    }
    
    // Add the new script
    if (currentContainer) {
      currentContainer.appendChild(script)
    }

    return () => {
      if (currentContainer) {
        const scriptElement = currentContainer.querySelector('script')
        if (scriptElement) {
          currentContainer.removeChild(scriptElement)
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