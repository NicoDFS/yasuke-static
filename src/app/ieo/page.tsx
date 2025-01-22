import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function IEO() {
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
                Initial Exchange Offering
              </h1>
              <p className="text-center text-zinc-400 mb-12">
                Launch your token through Yasuke's IEO platform. Benefit from our established user base, secure infrastructure, and marketing support.
              </p>

              <div className="glass-dark rounded-2xl p-8 space-y-8">
                {/* Benefits Section */}
                <section className="space-y-6">
                  <h2 className="text-2xl font-bold gradient-text">Why Choose Yasuke for Your IEO?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-zinc-200">Established User Base</h3>
                      <p className="text-zinc-400">Access a large community of verified traders and investors ready to participate in your token sale.</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-zinc-200">Marketing Support</h3>
                      <p className="text-zinc-400">Benefit from our marketing channels and get featured on our platform to maximize visibility.</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-zinc-200">Secure Infrastructure</h3>
                      <p className="text-zinc-400">Launch your token on our battle-tested platform with robust security measures.</p>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-zinc-200">Post-IEO Support</h3>
                      <p className="text-zinc-400">Get continued support after your IEO with market making and liquidity services.</p>
                    </div>
                  </div>
                </section>

                {/* Requirements Section */}
                <section className="space-y-6">
                  <h2 className="text-2xl font-bold gradient-text">IEO Requirements</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-zinc-200">Technical Requirements</h3>
                      <ul className="list-disc list-inside text-zinc-400 space-y-2">
                        <li>Smart contract audit from a reputable firm</li>
                        <li>Technical documentation and whitepaper</li>
                        <li>Token contract source code verification</li>
                        <li>Compliance with token standards (ERC-20, BEP-20, etc.)</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-zinc-200">Business Requirements</h3>
                      <ul className="list-disc list-inside text-zinc-400 space-y-2">
                        <li>Clear business model and use case</li>
                        <li>Experienced team with verifiable background</li>
                        <li>Detailed tokenomics and vesting schedule</li>
                        <li>Marketing and community growth strategy</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-zinc-200">Legal Requirements</h3>
                      <ul className="list-disc list-inside text-zinc-400 space-y-2">
                        <li>Legal opinion on token classification</li>
                        <li>Company registration documents</li>
                        <li>KYC verification for team members</li>
                        <li>Compliance with local regulations</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Application Form */}
                <section className="space-y-6">
                  <h2 className="text-2xl font-bold gradient-text">Apply for IEO</h2>
                  <p className="text-zinc-400">
                    Ready to launch your token? Fill out our IEO application form. Our team will review your submission and contact you within 5 business days.
                  </p>
                  <form 
                    action="YOUR_GOOGLE_FORM_URL"
                    method="post"
                    target="_blank"
                    className="space-y-6"
                  >
                    <input type="hidden" name="entry.1" value="IEO Application" />
                    
                    {/* Project Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-zinc-200">Project Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="project_name" className="block text-sm font-medium text-zinc-400 mb-1">Project Name *</label>
                          <input
                            type="text"
                            name="entry.2"
                            id="project_name"
                            required
                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-200"
                            placeholder="Enter project name"
                          />
                        </div>
                        <div>
                          <label htmlFor="token_symbol" className="block text-sm font-medium text-zinc-400 mb-1">Token Symbol *</label>
                          <input
                            type="text"
                            name="entry.3"
                            id="token_symbol"
                            required
                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-200"
                            placeholder="Enter token symbol"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-zinc-200">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact_name" className="block text-sm font-medium text-zinc-400 mb-1">Contact Name *</label>
                          <input
                            type="text"
                            name="entry.4"
                            id="contact_name"
                            required
                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-200"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact_email" className="block text-sm font-medium text-zinc-400 mb-1">Contact Email *</label>
                          <input
                            type="email"
                            name="entry.5"
                            id="contact_email"
                            required
                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-200"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Token Details */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-zinc-200">Token Details</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label htmlFor="blockchain" className="block text-sm font-medium text-zinc-400 mb-1">Blockchain Platform *</label>
                          <select
                            name="entry.6"
                            id="blockchain"
                            required
                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-200"
                          >
                            <option value="">Select blockchain</option>
                            <option value="Ethereum">Ethereum</option>
                            <option value="BNB Chain">BNB Chain</option>
                            <option value="Polygon">Polygon</option>
                            <option value="KalyChain">KalyChain</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="total_supply" className="block text-sm font-medium text-zinc-400 mb-1">Total Supply *</label>
                          <input
                            type="text"
                            name="entry.7"
                            id="total_supply"
                            required
                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-200"
                            placeholder="Enter total token supply"
                          />
                        </div>
                        <div>
                          <label htmlFor="ieo_allocation" className="block text-sm font-medium text-zinc-400 mb-1">IEO Allocation *</label>
                          <input
                            type="text"
                            name="entry.8"
                            id="ieo_allocation"
                            required
                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-200"
                            placeholder="Enter IEO allocation amount"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Links */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-zinc-200">Project Links</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <label htmlFor="website" className="block text-sm font-medium text-zinc-400 mb-1">Website *</label>
                          <input
                            type="url"
                            name="entry.9"
                            id="website"
                            required
                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-200"
                            placeholder="https://"
                          />
                        </div>
                        <div>
                          <label htmlFor="whitepaper" className="block text-sm font-medium text-zinc-400 mb-1">Whitepaper *</label>
                          <input
                            type="url"
                            name="entry.10"
                            id="whitepaper"
                            required
                            className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-200"
                            placeholder="https://"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-zinc-200">Additional Information</h3>
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-zinc-400 mb-1">Project Description *</label>
                        <textarea
                          name="entry.11"
                          id="description"
                          required
                          rows={4}
                          className="w-full px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-zinc-200"
                          placeholder="Describe your project, its goals, and unique value proposition"
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex justify-center pt-4">
                      <Button type="submit" size="lg" className="bg-blue-500 hover:bg-blue-600">
                        Submit IEO Application
                      </Button>
                    </div>
                  </form>
                </section>
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