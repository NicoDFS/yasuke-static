import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import Image from "next/image"

export default function Terms() {
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
                User Agreement
              </h1>
              <p className="text-center text-zinc-400 mb-12">Last Updated: 06/01/2025</p>

              <div className="glass-dark rounded-2xl p-8 space-y-8">
                {/* Introduction */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">1. Introduction</h2>
                  <p className="text-zinc-400">
                    By accessing, browsing, or using the Yasuke website (www.yasuke.exchange) or by creating an account on the Yasuke platform, you agree to comply with the terms and conditions of this User Agreement (hereinafter referred to as the &apos;Agreement&apos;). This Agreement constitutes a legally binding contract between you (hereinafter &apos;User&apos;) and Yasuke (operated by Kalyssi Europe s.r.o, Kalyssi OÜ, and other affiliated entities).
                  </p>
                  <p className="text-zinc-400">
                    Please read this Agreement carefully before using Yasuke&apos;s services. If you do not accept the terms of this Agreement, you must neither access the website nor use Yasuke&apos;s services.
                  </p>
                </section>

                {/* Definitions */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">2. Definitions</h2>
                  <ul className="space-y-2 text-zinc-400">
                    <li><strong className="text-zinc-200">Digital Assets:</strong> Cryptocurrencies or tokens (e.g., BTC, ETH, USDT) exchanged on the Yasuke platform.</li>
                    <li><strong className="text-zinc-200">Account:</strong> A personal or professional account created by the User on the Yasuke platform.</li>
                    <li><strong className="text-zinc-200">Platform:</strong> Yasuke&apos;s digital tools allowing the exchange, storage, or management of digital assets.</li>
                    <li><strong className="text-zinc-200">Fees:</strong> Charges applied by Yasuke for using its services.</li>
                    <li><strong className="text-zinc-200">User:</strong> Any individual or entity accessing the Yasuke platform or using its services.</li>
                  </ul>
                  <p className="text-sm text-zinc-500">(Additional definitions are available in the AML/CFT Policy and the Privacy Policy.)</p>
                </section>

                {/* Purpose */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">3. Purpose of the Agreement</h2>
                  <p className="text-zinc-400">This Agreement governs:</p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400 pl-4">
                    <li>Access to the Yasuke platform for the exchange and storage of digital assets.</li>
                    <li>The rights and responsibilities of platform users.</li>
                    <li>Conditions applicable to transactions and related services.</li>
                  </ul>
                </section>

                {/* General Terms */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">4. General Terms of Use</h2>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">4.1 Eligibility</h3>
                    <p className="text-zinc-400">
                      Yasuke&apos;s services are exclusively available to users aged 18 years or older. You must also ensure that the use of Yasuke&apos;s services is authorized in your country of residence.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">4.2 Single Account Rule</h3>
                    <p className="text-zinc-400">
                      Each user is allowed to create one account unless otherwise explicitly agreed upon with Yasuke. Multiple accounts are prohibited.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">4.3 Compliance with Local Laws</h3>
                    <p className="text-zinc-400">
                      Users are responsible for complying with local laws regarding the use of digital assets and Yasuke&apos;s services.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">4.4 KYC/AML Verification</h3>
                    <p className="text-zinc-400">
                      Yasuke reserves the right to request additional information to verify your identity and ensure compliance with AML/CFT standards.
                    </p>
                  </div>
                </section>

                {/* AML/CFT Policy */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">5. AML/CFT Policy</h2>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">5.1 Strict Compliance</h3>
                    <p className="text-zinc-400">
                      Yasuke adheres to all regulations related to Anti-Money Laundering (AML) and Counter-Terrorism Financing (CFT).
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">5.2 User Obligations</h3>
                    <p className="text-zinc-400">
                      Users must provide accurate and up-to-date information for AML/CFT verifications. Non-compliance may result in account suspension or termination.
                    </p>
                  </div>
                </section>

                {/* Cancellation and Refund */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">6. Cancellation and Refund Policy</h2>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">6.1 Finality of Transactions</h3>
                    <p className="text-zinc-400">
                      All transactions made on the Yasuke platform are final once executed.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">6.2 Refund of Unused Funds</h3>
                    <p className="text-zinc-400">
                      Deposits not used for transactions may be withdrawn in accordance with the platform&apos;s conditions.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">6.3 Automatic Conversion to Stablecoins</h3>
                    <p className="text-zinc-400">
                      All fiat deposits may be automatically converted to stablecoins (e.g., USDT, USDC, EURt) based on the exchange rates at the time of the transaction.
                    </p>
                  </div>
                </section>

                {/* Account Security */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">7. Account Security</h2>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">7.1 User Responsibility</h3>
                    <p className="text-zinc-400">
                      Users are responsible for securing their account credentials (password, 2FA codes). Any activity conducted under your account is your responsibility.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">7.2 Reporting Unauthorized Access</h3>
                    <p className="text-zinc-400">
                      Users must immediately notify Yasuke of any suspected unauthorized access to their account.
                    </p>
                  </div>
                </section>

                {/* Prevention of Illegal Use */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">8. Prevention of Illegal Use</h2>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">8.1 Prohibited Activities</h3>
                    <p className="text-zinc-400">
                      Using Yasuke&apos;s services for illegal activities (e.g., money laundering, terrorism financing, fraud) is strictly prohibited.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">8.2 Actions for Non-Compliance</h3>
                    <p className="text-zinc-400">
                      If fraudulent use is suspected, Yasuke may suspend or terminate the account in question.
                    </p>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">9. Limitation of Liability</h2>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">9.1 Service Access</h3>
                    <p className="text-zinc-400">
                      Yasuke does not guarantee continuous and uninterrupted access to the platform. Temporary interruptions may occur, especially for maintenance purposes.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">9.2 Third-Party Losses</h3>
                    <p className="text-zinc-400">
                      Yasuke is not responsible for losses caused by third-party attacks, viruses, or communication failures.
                    </p>
                  </div>
                </section>

                {/* Jurisdiction */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">10. Jurisdiction and Dispute Resolution</h2>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">10.1 Governing Law</h3>
                    <p className="text-zinc-400">
                      This Agreement is governed by the laws of the Czech Republic, unless otherwise stated.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">10.2 Dispute Resolution</h3>
                    <p className="text-zinc-400">
                      Any dispute related to this Agreement will be submitted to arbitration in accordance with applicable local laws.
                    </p>
                  </div>
                </section>

                {/* Amendments */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">11. Amendments to the Agreement</h2>
                  <p className="text-zinc-400">
                    Yasuke reserves the right to amend this Agreement at any time. Any amendments will be communicated through the website, and continued use of Yasuke&apos;s services will constitute acceptance of the revised terms.
                  </p>
                </section>

                {/* Related Documents */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">12. Related Documents</h2>
                  <ul className="space-y-2 text-zinc-400">
                    <li><Link href="/kyc-policy" className="text-blue-400 hover:text-blue-300">• AML/CFT Policy</Link></li>
                    <li><Link href="/privacy" className="text-blue-400 hover:text-blue-300">• Privacy Policy</Link></li>
                    <li><Link href="/delisting" className="text-blue-400 hover:text-blue-300">• Delisting Policy</Link></li>
                  </ul>
                  <p className="text-zinc-400 mt-4">
                    For any questions or clarifications regarding this Agreement, please contact customer support at legal@yasuke.exchange.
                  </p>
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