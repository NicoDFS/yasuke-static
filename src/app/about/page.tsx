"use client"

import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { FileText, Download, Globe2 } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-[#0a0b0f]">
      <SiteHeader />
      
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-gradient" />
        <div className="relative container py-12">
          <div className="max-w-[980px] mx-auto">
            {/* Hero Content */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                About YASUKE Exchange
              </h1>
              <p className="text-xl text-zinc-400">
                Building the Future of Digital Asset Trading
              </p>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              {/* Vision & Mission */}
              <div className="p-8 rounded-lg bg-[#1d1e24]/50 backdrop-blur border border-zinc-800/50">
                <h2 className="text-2xl font-bold mb-6 text-zinc-100">Our Vision</h2>
                <p className="text-zinc-300 mb-6">
                  YASUKE Exchange aims to revolutionize the cryptocurrency trading landscape by providing 
                  a secure, transparent, and innovative platform that bridges the gap between traditional 
                  finance and the digital asset ecosystem.
                </p>
                <p className="text-zinc-300">
                  Our mission is to empower traders and investors with cutting-edge tools, institutional-grade 
                  security, and a seamless trading experience while maintaining the highest standards of 
                  regulatory compliance and operational transparency.
                </p>
              </div>

              {/* Core Values */}
              <div className="p-8 rounded-lg bg-[#1d1e24]/50 backdrop-blur border border-zinc-800/50">
                <h2 className="text-2xl font-bold mb-6 text-zinc-100">Core Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-zinc-100">Security First</h3>
                    <p className="text-zinc-300">
                      We prioritize the security of user assets through multi-layered security protocols, 
                      regular audits, and advanced risk management systems.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-zinc-100">Transparency</h3>
                    <p className="text-zinc-300">
                      We maintain complete transparency in our operations, fees, and market practices to 
                      build trust and credibility with our users.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-zinc-100">Innovation</h3>
                    <p className="text-zinc-300">
                      We continuously innovate our platform with advanced trading features and new financial 
                      products to meet evolving market needs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-zinc-100">Compliance</h3>
                    <p className="text-zinc-300">
                      We adhere to strict regulatory standards and implement robust KYC/AML procedures to 
                      ensure a safe trading environment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technology & Infrastructure */}
              <div className="p-8 rounded-lg bg-[#1d1e24]/50 backdrop-blur border border-zinc-800/50">
                <h2 className="text-2xl font-bold mb-6 text-zinc-100">Technology & Infrastructure</h2>
                <div className="space-y-6">
                  <p className="text-zinc-300">
                    Our platform is built on cutting-edge technology that ensures:
                  </p>
                  <ul className="list-disc list-inside space-y-4 text-zinc-300">
                    <li>High-frequency trading capabilities with ultra-low latency</li>
                    <li>Advanced order matching engine for optimal price execution</li>
                    <li>Multi-layer security architecture with cold storage solutions</li>
                    <li>Cross-chain interoperability supporting multiple blockchain networks</li>
                    <li>Real-time market data and advanced charting tools</li>
                  </ul>
                </div>
              </div>

              {/* Whitepaper Access */}
              <div className="p-8 rounded-lg bg-[#1d1e24]/50 backdrop-blur border border-zinc-800/50">
                <h2 className="text-2xl font-bold mb-6 text-zinc-100">Learn More</h2>
                <p className="text-zinc-300 mb-6">
                  Download our whitepaper to learn more about YASUKE Exchange's vision, technology, 
                  and roadmap for the future of digital asset trading.
                </p>
                <div className="flex flex-wrap gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 