import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import Image from "next/image"

export default function Roadmap() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0b0f]">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="container relative">
            <div className="max-w-[800px] mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text text-center mb-4">
                Roadmap
              </h1>
              <p className="text-center text-zinc-400 mb-12">
                Our roadmap is built on a commitment to continuous development and innovation. We're dedicated to enhancing our platform with new features, network integrations, and security upgrades, ensuring a cutting-edge trading experience.
              </p>

              <div className="glass-dark rounded-2xl p-8 space-y-12">
                {/* Q1 2025 */}
                <div className="relative pl-8 border-l-2 border-blue-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500"></div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold gradient-text">Q1 2025</h2>
                    <h3 className="text-xl font-semibold text-zinc-200">Yasuke Exchange Launch</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• Launch of Yasuke Exchange</li>
                      <li>• YAS token deployment</li>
                      <li>• YAS staking rewards program</li>
                    </ul>
                  </div>
                </div>

                {/* Q2 2025 */}
                <div className="relative pl-8 border-l-2 border-purple-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-500"></div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold gradient-text">Q2 2025</h2>
                    <h3 className="text-xl font-semibold text-zinc-200">Expansion of Services</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• Margin trading implementation</li>
                      <li>• Lending and Borrowing services</li>
                      <li>• International expansion initiatives</li>
                    </ul>
                  </div>
                </div>

                {/* Q3 2025 */}
                <div className="relative pl-8 border-l-2 border-indigo-500">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-500"></div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold gradient-text">Q3 2025</h2>
                    <h3 className="text-xl font-semibold text-zinc-200">Continuous Development</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• Advanced trading features</li>
                      <li>• Liquidity mining programs</li>
                      <li>• Strategic partnerships</li>
                    </ul>
                  </div>
                </div>

                {/* Q4 2025 */}
                <div className="relative pl-8 border-l-2 border-blue-400">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-400"></div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold gradient-text">Q4 2025</h2>
                    <h3 className="text-xl font-semibold text-zinc-200">DeFi Products and Services</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• DeFi product suite launch</li>
                      <li>• Enhanced risk management systems</li>
                      <li>• Institutional API access</li>
                    </ul>
                  </div>
                </div>

                {/* Q1 2026 */}
                <div className="relative pl-8 border-l-2 border-purple-400">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-purple-400"></div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold gradient-text">Q1 2026</h2>
                    <h3 className="text-xl font-semibold text-zinc-200">Traditional Financial Products</h3>
                    <ul className="space-y-2 text-zinc-400">
                      <li>• Traditional financial product integration</li>
                      <li>• Hybrid financial products</li>
                      <li>• Community governance implementation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container py-12 md:py-16">
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
      </footer>
    </div>
  )
} 