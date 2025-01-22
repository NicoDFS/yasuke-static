import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

export default function TokenListing() {
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
            <div className="text-center max-w-[800px] mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
                List Your Token
              </h1>
              <p className="text-xl text-zinc-400">
                Join the YASUKE ecosystem and reach a global audience of traders. Submit your application below.
              </p>
            </div>

            {/* Application Form */}
            <div className="max-w-[800px] mx-auto">
              <div className="glass-dark rounded-2xl p-8">
                <form action="YOUR_GOOGLE_FORM_URL" method="POST" target="_blank" className="space-y-8">
                  {/* Contact Information */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold gradient-text">Contact Information</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Your Name</label>
                        <Input name="entry.1" placeholder="Full Name" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Your Role</label>
                        <Input name="entry.2" placeholder="e.g. CEO, CTO, Marketing Lead" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Your Email</label>
                        <Input name="entry.3" type="email" placeholder="email@example.com" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Your Mobile</label>
                        <Input name="entry.4" type="tel" placeholder="+1234567890" className="bg-zinc-900/50" />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold gradient-text">Project Information</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Token Full Name</label>
                        <Input name="entry.5" placeholder="e.g. Ethereum" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Token Ticker</label>
                        <Input name="entry.6" placeholder="e.g. ETH" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Official Website</label>
                        <Input name="entry.7" type="url" placeholder="https://" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Block Explorer</label>
                        <Input name="entry.8" type="url" placeholder="https://" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Source Code</label>
                        <Input name="entry.9" type="url" placeholder="GitHub Repository URL" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Whitepaper</label>
                        <Input name="entry.10" type="url" placeholder="Whitepaper URL" className="bg-zinc-900/50" />
                      </div>
                    </div>
                  </div>

                  {/* Token Metrics */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold gradient-text">Token Metrics</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Total Supply</label>
                        <Input name="entry.11" placeholder="e.g. 21,000,000" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Circulating Supply</label>
                        <Input name="entry.12" placeholder="e.g. 19,000,000" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Initial Price (USD)</label>
                        <Input name="entry.13" type="number" step="0.000001" placeholder="e.g. 0.1" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Current Market Cap (USD)</label>
                        <Input name="entry.14" type="number" placeholder="e.g. 1000000" className="bg-zinc-900/50" />
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold gradient-text">Community & Social</h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Twitter URL</label>
                        <Input name="entry.15" type="url" placeholder="https://twitter.com/" className="bg-zinc-900/50" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-zinc-400">Telegram Group</label>
                        <Input name="entry.16" type="url" placeholder="https://t.me/" className="bg-zinc-900/50" />
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold gradient-text">Project Details</h2>
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">Project Introduction</label>
                      <Textarea 
                        name="entry.17" 
                        placeholder="Provide a detailed description of your project, its goals, and unique value proposition..."
                        className="bg-zinc-900/50 min-h-[150px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-zinc-400">Token Distribution Plan</label>
                      <Textarea 
                        name="entry.18" 
                        placeholder="Describe your token's distribution plan, vesting schedules, and allocation..."
                        className="bg-zinc-900/50 min-h-[150px]"
                      />
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button type="submit" size="lg" className="w-full bg-[#1d1e24] text-zinc-100 hover:bg-[#1d1e24]/80">
                      Submit Application
                    </Button>
                    <p className="text-sm text-zinc-400 text-center mt-4">
                      By submitting this form, you agree to our listing terms and conditions.
                    </p>
                  </div>
                </form>
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