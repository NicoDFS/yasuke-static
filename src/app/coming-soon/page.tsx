import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a0b0f]">
      <SiteHeader />
      <main className="flex-1">
        {/* Coming Soon Hero Section */}
        <section className="relative min-h-[80vh] overflow-hidden flex items-center">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          {/* Content */}
          <div className="container relative">
            <div className="mx-auto max-w-[800px]">
              <div className="text-center space-y-8">
                <div className="relative group inline-block">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="relative rounded-full bg-black/50 p-4">
                    <svg className="w-16 h-16 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold gradient-text">
                  Coming Soon
                </h1>
                
                <p className="text-xl text-zinc-400 max-w-[600px] mx-auto">
                  We're working hard to bring you this exciting new feature. Follow us on social media for the latest updates and be the first to know when it launches.
                </p>

                <div className="flex justify-center gap-6">
                  <Link href="https://t.me/yasukecex" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.502-.168.728-.336 1.256-.504 1.609-.168.353-.503.454-.839.302l-2.35-1.763-1.127 1.107c-.124.124-.229.229-.468.229l.167-2.379 4.231-3.897c.185-.165-.041-.257-.283-.092L8.799 12.34l-2.379-.757c-.517-.161-.526-.516.107-.762l9.285-3.657c.43-.16.81.103.75.997z" />
                    </svg>
                  </Link>
                  <Link href="https://twitter.com/yasukecex" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </Link>
                  <Link href="https://discord.gg/yasukecex" className="text-zinc-400 hover:text-zinc-100 transition-colors">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
                    </svg>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <Button size="lg" className="relative bg-[#1d1e24] text-zinc-100 hover:bg-[#1d1e24]/80" asChild>
                      <Link href="/account/register">Sign Up Now</Link>
                    </Button>
                  </div>
                  <Button variant="outline" size="lg" className="border-zinc-700 hover:bg-zinc-800" asChild>
                    <Link href="/account/trade/BTC-USDT">Start Trading</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview Section */}
        <section className="container py-24">
          <div className="mx-auto max-w-[800px]">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative glass-dark rounded-xl p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10">
                      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Stay Updated</h3>
                  </div>
                  <p className="text-zinc-400">
                    Join our community to receive exclusive updates, early access opportunities, and special rewards when this feature launches.
                  </p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative glass-dark rounded-xl p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                      <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Early Access</h3>
                  </div>
                  <p className="text-zinc-400">
                    Create your account now to be among the first to experience this feature when it goes live. Early adopters will receive special benefits.
                  </p>
                </div>
              </div>
            </div>
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
                <li><Link href="/account/qucik-swap" className="text-muted-foreground hover:text-foreground">Buy/Sell Crypto</Link></li>
                <li><Link href="/coming-soon" className="text-muted-foreground hover:text-foreground">Card</Link></li>
                <li><Link href="/coming-soon" className="text-muted-foreground hover:text-foreground">Trading Competition</Link></li>
                <li><Link href="/token-listing" className="text-muted-foreground hover:text-foreground">Token Listing</Link></li>
                <li><Link href="/ieo" className="text-muted-foreground hover:text-foreground">IEO</Link></li>
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
              </ul>
            </div>

            {/* Social Column */}
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="https://t.me/yasukecex" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-.962 3.767-1.362 5.502-.168.728-.336 1.256-.504 1.609-.168.353-.503.454-.839.302l-2.35-1.763-1.127 1.107c-.124.124-.229.229-.468.229l.167-2.379 4.231-3.897c.185-.165-.041-.257-.283-.092L8.799 12.34l-2.379-.757c-.517-.161-.526-.516.107-.762l9.285-3.657c.43-.16.81.103.75.997z" />
                  </svg>
                </Link>
                <Link href="https://twitter.com/yasukecex" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
                <Link href="https://discord.gg/yasukecex" className="text-muted-foreground hover:text-foreground">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
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