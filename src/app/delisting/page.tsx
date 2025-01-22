import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import Image from "next/image"

export default function Delisting() {
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
                Delisting Policy
              </h1>
              <p className="text-center text-zinc-400 mb-12">Last Updated: 06/01/2025</p>

              <div className="glass-dark rounded-2xl p-8 space-y-8">
                {/* Purpose */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">1. Purpose</h2>
                  <p className="text-zinc-400">
                    The Yasuke Delisting Policy outlines the criteria, procedures, and responsibilities for the removal (delisting) of digital assets (cryptocurrencies or tokens) from the platform. This policy ensures transparency, protects users, and maintains market integrity while complying with regulatory and operational requirements. It also aims to align with global best practices in the cryptocurrency industry.
                  </p>
                </section>

                {/* Definitions */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">2. Definitions of Key Terms</h2>
                  <p className="text-zinc-400">To ensure clarity, the following key terms are defined for the purpose of this policy:</p>
                  <ul className="space-y-2 text-zinc-400 pl-4">
                    <li><strong className="text-zinc-200">Digital Asset:</strong> A cryptocurrency or token listed on the Yasuke platform.</li>
                    <li><strong className="text-zinc-200">Delisting:</strong> The process of removing a digital asset from the Yasuke platform.</li>
                    <li><strong className="text-zinc-200">Issuer:</strong> The entity or team responsible for the creation and maintenance of a digital asset.</li>
                  </ul>
                </section>

                {/* Legal Framework */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">3. Legal and Regulatory Framework</h2>
                  <p className="text-zinc-400">
                    Yasuke adheres to all applicable laws and regulations, including but not limited to Anti-Money Laundering (AML), Counter-Terrorism Financing (CFT), and data protection laws. This policy is designed to ensure compliance with global regulatory standards and to mitigate risks associated with non-compliance.
                  </p>
                </section>

                {/* Delisting Criteria */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">4. Delisting Criteria</h2>
                  <p className="text-zinc-400">A digital asset may be considered for delisting if one or more of the following criteria are met:</p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">4.1 Regulatory Non-Compliance</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400 pl-4">
                      <li>The asset or its issuer fails to comply with applicable laws and regulations, including those related to AML and CFT.</li>
                      <li>The asset is associated with international sanctions or illegal activities.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">4.2 Lack of Liquidity</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400 pl-4">
                      <li>The trading volume of the asset is insufficient to sustain an active and fair market.</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">4.3 Security Risks</h3>
                    <ul className="list-disc list-inside space-y-2 text-zinc-400 pl-4">
                      <li>The asset presents technical vulnerabilities or security flaws that endanger user funds or Yasuke's infrastructure.</li>
                    </ul>
                  </div>
                </section>

                {/* Risk Assessment */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">5. Risk Assessment Procedures</h2>
                  <p className="text-zinc-400">
                    Yasuke conducts periodic risk assessments to evaluate the performance and compliance of listed digital assets. These assessments involve consultations with legal, technical, and compliance experts to identify potential risks and ensure the platform's integrity.
                  </p>
                </section>

                {/* User Rights */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">6. User Rights and Responsibilities</h2>
                  <p className="text-zinc-400">
                    Users have the right to be informed about delisting decisions and to withdraw their assets within the specified withdrawal period. Users are responsible for monitoring official announcements and ensuring timely withdrawal of delisted assets.
                  </p>
                </section>

                {/* Delisting Procedure */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">7. Delisting Procedure</h2>
                  <p className="text-zinc-400">The delisting process involves the following steps:</p>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">7.1 Identification</h3>
                    <p className="text-zinc-400">
                      Yasuke conducts periodic reviews of listed assets to assess their compliance and performance. Users or third parties may also raise concerns.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">7.2 Evaluation</h3>
                    <p className="text-zinc-400">
                      An internal analysis is conducted to confirm whether delisting criteria are met. This includes consultations with legal, technical, and compliance experts.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-zinc-200">7.3 Notification</h3>
                    <p className="text-zinc-400">
                      Users and the asset issuer are notified of the delisting decision at least 30 days in advance, except in cases of emergency or severe non-compliance.
                    </p>
                  </div>
                </section>

                {/* Post-Delisting */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">8. Post-Delisting Asset Management</h2>
                  <p className="text-zinc-400">
                    After delisting, users have 60 days to withdraw the delisted asset. Beyond this period, Yasuke reserves the right to charge storage fees or transfer assets to a secure address until withdrawn by the user.
                  </p>
                </section>

                {/* Communication */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">9. Communication</h2>
                  <p className="text-zinc-400">
                    All delisting decisions are communicated through Yasuke's website, mobile applications, and official channels (e.g., emails, push notifications). Yasuke provides explanations for delisting decisions in public announcements, unless restricted by legal or security considerations.
                  </p>
                </section>

                {/* Policy Review */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">10. Policy Review</h2>
                  <p className="text-zinc-400">
                    Yasuke reserves the right to update this Delisting Policy to reflect regulatory developments, business needs, or changes in the cryptocurrency ecosystem. Updates will be communicated to users through official channels.
                  </p>
                </section>

                {/* Contact */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">11. Contact</h2>
                  <p className="text-zinc-400">
                    For questions regarding this policy or to report a high-risk asset, please contact Yasuke's support team:
                  </p>
                  <p className="text-zinc-400">
                    Email: <a href="mailto:legal@yasuke.exchange" className="text-blue-400 hover:text-blue-300">legal@yasuke.exchange</a>
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