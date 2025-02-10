import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import TradingViewWidget from "@/components/trading-view-widget"

import { NewListings } from "@/components/new-listings"
import { LivePriceTicker } from "@/components/live-price-ticker"
import { MarketOverview } from "@/components/market-overview"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0b0f]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[65vh] overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          {/* Content */}
          <div className="container relative flex flex-col items-center gap-4 pt-20 pb-16">
            <div className="flex max-w-[980px] flex-col items-center gap-2">
              <div className="flex items-center gap-4 mb-6 animate-float">
                <Image
                  src="/images/yasuke-logo.png"
                  alt="Yasuke Exchange"
                  width={246}
                  height={82}
                  priority
                  className="h-24 w-auto"
                />
              </div>
              <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] gradient-text mb-4">
                Trade Crypto like a Samurai!
              </h1>
              <p className="max-w-[750px] text-center text-lg text-zinc-400 sm:text-xl">
                A new era of trading is upon you, with a platform designed for ambitious traders. Experience seamless trading with advanced features, competitive fees, and institutional-grade security.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <Button size="lg" className="relative bg-[#1d1e24] text-zinc-100 hover:bg-[#1d1e24]/80" asChild>
                  <Link href="/account/register">Start Trading</Link>
                </Button>
              </div>
              <Button variant="outline" size="lg" className="border-zinc-700 hover:bg-zinc-800" asChild>
                <Link href="/account/trade/BTC-USDT">View Markets</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* IEO and New Listings Section */}
        <section className="container py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* IEO Card */}
            <div className="group relative col-span-1">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative glass-dark rounded-2xl p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/images/crypto-icons/yas.png"
                      alt="YAS"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold">YASUKE CEX</h4>
                        <span className="px-2 py-0.5 text-xs font-medium bg-blue-500/20 text-blue-500 rounded-full">Coming Soon</span>
                      </div>
                      <p className="text-sm text-zinc-400">YAS/USDT</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Initial Price</span>
                    <span className="font-medium">$0.001</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Total Supply</span>
                    <span className="font-medium">21,000,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Initial Distribution</span>
                    <span className="font-medium">20%</span>
                  </div>
                  <Button className="w-full bg-[#1d1e24] text-zinc-100 hover:bg-[#1d1e24]/80" asChild>
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* New Listings */}
            <div className="col-span-2">
              <NewListings />
            </div>
          </div>
        </section>

        {/* Live Price Ticker */}
        <LivePriceTicker />

        {/* TradingView Chart Section */}
        <section className="container py-8">
          <div className="glass-dark rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">BTC/USDT Chart</h2>
              <div className="flex gap-2">
                {['1H', '4H', '1D', '1W'].map((timeframe) => (
                  <Button
                    key={timeframe}
                    variant="outline"
                    size="sm"
                    className="text-sm hover:bg-muted/80"
                  >
                    {timeframe}
                  </Button>
                ))}
              </div>
            </div>
            <div className="w-full">
              <TradingViewWidget />
            </div>
          </div>
        </section>

        {/* Market Overview Section */}
        <section className="container py-8">
          <MarketOverview />
        </section>

        {/* Features Section */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Security Feature */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex flex-col gap-4 rounded-2xl glass-dark p-8 h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                  <svg className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Multilayered Security</h3>
                <p className="text-zinc-400">
                  State-of-the-art security with hot and cold wallets, smart contract audits, and anti-phishing measures.
                </p>
              </div>
            </div>

            {/* Trading Tools Feature */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex flex-col gap-4 rounded-2xl glass-dark p-8 h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                  <svg className="h-7 w-7 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Fast Execution</h3>
                <p className="text-zinc-400">
                  Ultra-low latency ensures your orders are executed in microseconds, with no trading slippage.
                </p>
              </div>
            </div>

            {/* Support Feature */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex flex-col gap-4 rounded-2xl glass-dark p-8 h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors">
                  <svg className="h-7 w-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">24/7 Support</h3>
                <p className="text-zinc-400">
                  Round-the-clock customer support in multiple languages
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* YAS Token Section */}
        <section className="container py-12 md:py-16">
          <div className="relative overflow-hidden rounded-3xl glass-dark">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="absolute bottom-0 right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            </div>
            
            <div className="relative px-6 py-12 md:px-12">
              <div className="mx-auto max-w-[980px]">
                <div className="flex flex-col items-center justify-center gap-4 mb-12">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <Image
                      src="/images/yas-token.png"
                      alt="YAS Token"
                      width={100}
                      height={100}
                      className="relative rounded-full bg-black p-2"
                    />
                  </div>
                  <h2 className="text-4xl font-bold gradient-text text-center">YAS Token</h2>
                </div>
                <div className="grid gap-12 md:grid-cols-2">
                  <div className="space-y-6">
                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative space-y-4 rounded-xl glass p-6">
                        <h3 className="text-2xl font-bold">Token Allocation</h3>
                        <p className="text-zinc-400">
                          Initial distribution: Only 20% of the 21 million max supply will be available from the launch of the exchange in early 2025. This guarantees a controlled ramp-up and limits initial volatility.
                        </p>
                      </div>
                    </div>
                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative space-y-4 rounded-xl glass p-6">
                        <h4 className="text-xl font-bold">Benefits</h4>
                        <ul className="grid gap-3">
                          {[
                            "Reduced trading fees",
                            "Access to exclusive trading features",
                            "Participation in platform governance",
                            "Staking rewards",
                            "Early access to new features"
                          ].map((benefit, index) => (
                            <li key={index} className="flex items-center gap-3 text-zinc-400">
                              <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="group relative h-full">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                      <div className="relative h-full space-y-6 rounded-xl glass p-6">
                        <h3 className="text-2xl font-bold">Token Utility</h3>
                        <p className="text-zinc-400">
                          The YAS token is designed to offer secure, transparent and innovative trading solutions. It&apos;s an integral part of the YASUKE ecosystem, providing holders with exclusive benefits and opportunities.
                        </p>
                        <div className="pt-4">
                          <Button variant="outline" size="lg" className="w-full group relative overflow-hidden" asChild>
                            <Link href="/ieo/yas">
                              <span className="relative z-10">Learn More About YAS</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-[980px]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold gradient-text mb-4">About Yasuké Exchange</h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                A revolutionary trading platform built for the future of finance
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative space-y-6 rounded-xl glass p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                  </div>
                  <p className="text-zinc-400">
                    YASUKE is a digital asset trading platform that aims to redefine crypto market standards. With its native token, the YAS, YASUKE offers a unique trading experience, optimized for security, transparency and efficiency.
                  </p>
                  <p className="text-zinc-400">
                    Whether you&apos;re an active trader in the crypto world or an investor from a traditional financial background, our exchange meets your needs with an intuitive interface, advanced trading tools and competitive fees.
                  </p>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative space-y-6 rounded-xl glass p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                      <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold">Multichain Support</h3>
                  </div>
                  <p className="text-zinc-400">
                    Trade assets effortlessly and access a diverse crypto ecosystem without limitations. Support for Bitcoin, Ethereum, Tron, Polygon, BSC, KalyChain all in one platform.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" size="lg" className="w-full group relative overflow-hidden" asChild>
                      <Link href="/about">
                        <span className="relative z-10">Learn More</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="container py-12 md:py-16">
          <div className="mx-auto max-w-[980px]">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold gradient-text mb-4">Our Partners</h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Working with industry leaders to build the future of finance
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
              <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
                {[
                  { file: 'partner1.png', type: 'png' },
                  { file: 'partner2.svg', type: 'svg' },
                  { file: 'partner3.png', type: 'png' },
                  { file: 'partner4.svg', type: 'svg' },
                  { file: 'partner5.png', type: 'png' }
                ].map((partner, i) => (
                  <div key={i} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-48 h-48 glass rounded-xl flex items-center justify-center p-8">
                      <Image
                        src={`/images/${partner.file}`}
                        alt={`Partner ${i + 1}`}
                        width={partner.type === 'svg' ? 160 : 180}
                        height={partner.type === 'svg' ? 160 : 180}
                        className={`
                          opacity-75 group-hover:opacity-100 transition-opacity duration-300
                          ${partner.type === 'png' ? 'filter contrast-125 brightness-125' : ''}
                        `}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Launch Info Section */}
        <section className="container py-12 bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-lg mb-24">
          <div className="mx-auto max-w-[980px] text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Crypto Trading Revolution</h2>
            <p className="text-xl mb-6 text-zinc-200">
            Sign up today and take advantage of YASUKE&apos;s exclusive benefits before the official launch of our exchange in 2025.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900" 
              asChild
            >
              <Link href="/account/register">Register Now</Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Products Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Products</h3>
              <ul className="space-y-2">
                <li><Link href="/account/trade/BTC-USDT" className="text-muted-foreground hover:text-foreground">Trade</Link></li>
                <li><Link href="/account/quick-swap" className="text-muted-foreground hover:text-foreground">Swap</Link></li>
                <li><Link href="/account/wallet" className="text-muted-foreground hover:text-foreground">Wallet</Link></li>
                <li><Link href="/account/quick-swap" className="text-muted-foreground hover:text-foreground">Buy/Sell Crypto</Link></li>
                <li><Link href="/coming-soon" className="text-muted-foreground hover:text-foreground">Card</Link></li>
                <li><Link href="/coming-soon" className="text-muted-foreground hover:text-foreground">Trading Competition</Link></li>
                <li><Link href="/token-listing" className="text-muted-foreground hover:text-foreground">Token Listing</Link></li>
                <li><Link href="/ieo" className="text-muted-foreground hover:text-foreground">IEO</Link></li>
                <li><Link href="/coming-soon" className="text-muted-foreground hover:text-foreground">Market Making</Link></li>
                <li><Link href="/kyc-policy" className="text-muted-foreground hover:text-foreground">AML/KYC</Link></li>
              </ul>
            </div>

            {/* Information Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Information</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Company</Link></li>
                <li><Link href="/account/support" className="text-muted-foreground hover:text-foreground">Support</Link></li>
                <li><Link href="/account/fees" className="text-muted-foreground hover:text-foreground">Fees and Limits</Link></li>
                <li><Link href="/roadmap" className="text-muted-foreground hover:text-foreground">Roadmap</Link></li>
                <li><Link href="/account/settings" className="text-muted-foreground hover:text-foreground">Settings</Link></li>
              </ul>
            </div>

            {/* Earn Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Earn</h3>
              <ul className="space-y-2">
                <li><Link href="/coming-soon" className="text-muted-foreground hover:text-foreground">Lending</Link></li>
                <li><Link href="/coming-soon" className="text-muted-foreground hover:text-foreground">Borrowing</Link></li>
                <li><Link href="/coming-soon" className="text-muted-foreground hover:text-foreground">Staking</Link></li>
                <li><Link href="/coming-soon" className="text-muted-foreground hover:text-foreground">Nodes</Link></li>
                <li><Link href="/coming-soon" className="text-muted-foreground hover:text-foreground">Launchpad</Link></li>
              </ul>
            </div>

            {/* Social & Support Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Connect With Us</h3>
              <p className="text-sm text-muted-foreground">Get 24/7 chat support with our friendly customer agents at your service.</p>
              <div className="flex space-x-4">
                <Link href="https://t.me/yasukecex" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.502-.168.728-.336 1.256-.504 1.609-.168.353-.503.454-.839.302l-2.35-1.763-1.127 1.107c-.124.124-.229.229-.468.229l.167-2.379 4.231-3.897c.185-.165-.041-.257-.283-.092L8.799 12.34l-2.379-.757c-.517-.161-.526-.516.107-.762l9.285-3.657c.43-.16.81.103.75.997z" />
                  </svg>
                </Link>
                <Link href="https://twitter.com/yasukecex" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link href="https://discord.gg/yasukecex" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/yasuke-logo.png"
                  alt="Yasuke Exchange"
                  width={246}
                  height={82}
                  priority
                  className="h-24 w-auto"
                />
                <span className="text-sm text-muted-foreground">
                  © 2025 YasukeCEX - From Samurai to Crypto Warrior
                </span>
              </div>
              <div className="flex gap-4 text-sm text-muted-foreground">
                <Link href="/terms" className="hover:text-foreground">Terms of Use</Link>
                <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                <Link href="/kyc-policy" className="hover:text-foreground">KYC/AML Policy</Link>
                <Link href="/delisting" className="hover:text-foreground">Delisting Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}