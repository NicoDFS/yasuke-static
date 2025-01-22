"use client"

import Link from "next/link"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { FileText, Download, Globe2 } from "lucide-react"

export default function YASTokenDetails() {
  return (
    <div className="relative min-h-screen bg-[#0a0b0f]">
      <SiteHeader />
      
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient" />
        <div className="relative container py-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Token Info */}
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/yas-token.png"
                  alt="YAS Token"
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
                <div>
                  <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    YAS Token
                  </h1>
                  <p className="text-zinc-400">YASUKE Exchange Native Token</p>
                </div>
              </div>

              {/* Whitepaper Downloads */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button variant="outline" className="bg-[#1d1e24] hover:bg-zinc-800" asChild>
                  <Link href="/YASUKE_en.pdf" target="_blank" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <Globe2 className="h-4 w-4" />
                    EN Whitepaper
                    <Download className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" className="bg-[#1d1e24] hover:bg-zinc-800" asChild>
                  <Link href="/YASUKE_fr.pdf" target="_blank" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <Globe2 className="h-4 w-4" />
                    FR Whitepaper
                    <Download className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Project Description */}
              <div className="space-y-6 text-zinc-300">
                <div className="p-6 rounded-lg bg-[#1d1e24]/50 backdrop-blur border border-zinc-800/50">
                  <h2 className="text-xl font-semibold mb-4 text-zinc-100">About YASUKE Exchange</h2>
                  <p className="mb-4">
                    YASUKE is a digital asset trading platform that aims to redefine crypto market standards. 
                    With its native token, the YAS, YASUKE offers a unique trading experience, optimized for 
                    security, transparency and efficiency.
                  </p>
                  <p>
                    Whether you&apos;re an active trader in the crypto world or an investor from a traditional 
                    financial background, our exchange meets your needs with an intuitive interface, 
                    advanced trading tools and competitive fees.
                  </p>
                </div>

                {/* Token Metrics */}
                <div className="p-6 rounded-lg bg-[#1d1e24]/50 backdrop-blur border border-zinc-800/50">
                  <h2 className="text-xl font-semibold mb-4 text-zinc-100">Token Metrics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-[#0a0b0f]/50">
                      <p className="text-sm text-zinc-400">Maximum Supply</p>
                      <p className="text-lg font-semibold">21,000,000 YAS</p>
                    </div>
                    <div className="p-4 rounded-lg bg-[#0a0b0f]/50">
                      <p className="text-sm text-zinc-400">Initial Distribution</p>
                      <p className="text-lg font-semibold">20% of Max Supply</p>
                    </div>
                  </div>
                </div>

                {/* Key Features */}
                <div className="p-6 rounded-lg bg-[#1d1e24]/50 backdrop-blur border border-zinc-800/50">
                  <h2 className="text-xl font-semibold mb-4 text-zinc-100">Key Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-zinc-100">Multilayered Security</h3>
                      <p className="text-sm">
                        State-of-the-art security with hot and cold wallets, smart contract audits, 
                        and anti-phishing and anti-DDoS measures.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-zinc-100">Fast Execution</h3>
                      <p className="text-sm">
                        Ultra-low latency ensures orders are executed in microseconds, with no trading slippage.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-zinc-100">Total Transparency</h3>
                      <p className="text-sm">
                        Transparent spread display and unique market maker isolation model for 
                        manipulation-free liquidity.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-zinc-100">Multichain Support</h3>
                      <p className="text-sm">
                        Trade assets across Bitcoin, Ethereum, Tron, Polygon, BSC, and KalyChain networks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Roadmap */}
                <div className="p-6 rounded-lg bg-[#1d1e24]/50 backdrop-blur border border-zinc-800/50">
                  <h2 className="text-xl font-semibold mb-4 text-zinc-100">Development Roadmap</h2>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l-2 border-blue-500">
                      <h3 className="font-semibold text-zinc-100">Q1 2025 - Yasuke Exchange Launch</h3>
                      <p className="text-sm">Launch of Yasuke Exchange, YAS token and YAS staking rewards.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-purple-500">
                      <h3 className="font-semibold text-zinc-100">Q2 2025 - Expansion of Services</h3>
                      <p className="text-sm">Margin trading, Lending and Borrowing services, International expansion.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-blue-500">
                      <h3 className="font-semibold text-zinc-100">Q3 2025 - Continuous Development</h3>
                      <p className="text-sm">Advanced trading features, Liquidity mining, Strategic partnerships.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-purple-500">
                      <h3 className="font-semibold text-zinc-100">Q4 2025 - DeFi Products and Services</h3>
                      <p className="text-sm">DeFi Products, Enhanced Risk Management, Institutional API.</p>
                    </div>
                    <div className="relative pl-6 border-l-2 border-blue-500">
                      <h3 className="font-semibold text-zinc-100">Q1 2026 - Traditional Financial Products</h3>
                      <p className="text-sm">Traditional Financial Products, Hybrid Products, Community Governance.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full md:w-1/3 space-y-6">
              {/* IEO Info Card */}
              <div className="p-6 rounded-lg bg-[#1d1e24]/50 backdrop-blur border border-zinc-800/50">
                <h2 className="text-xl font-semibold mb-4 text-zinc-100">IEO Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-zinc-400">Token Name</p>
                    <p className="font-semibold">YAS Token</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Token Type</p>
                    <p className="font-semibold">Utility Token</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Platform</p>
                    <p className="font-semibold">KalyChain</p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Launch Date</p>
                    <p className="font-semibold">Q1 2025</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="p-6 rounded-lg bg-[#1d1e24]/50 backdrop-blur border border-zinc-800/50">
                <h2 className="text-xl font-semibold mb-4 text-zinc-100">Quick Links</h2>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full bg-[#1d1e24] hover:bg-zinc-800" asChild>
                    <Link href="https://www.yasuke.finance" target="_blank">
                      Website
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full bg-[#1d1e24] hover:bg-zinc-800" asChild>
                    <Link href="/token-listing">
                      Token Listing
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full bg-[#1d1e24] hover:bg-zinc-800" asChild>
                    <Link href="/kyc-policy">
                      KYC/AML Policy
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 