import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import Image from "next/image"

export default function KYCPolicy() {
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
              <h1 className="text-4xl md:text-6xl font-bold gradient-text text-center mb-12">
                AML/CTF Policy
              </h1>

              <div className="glass-dark rounded-2xl p-8 space-y-8">
                {/* Introduction */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Introduction</h2>
                  <p className="text-zinc-400">
                    The objective of Yasuke's Anti-Money Laundering (AML), Counter-Terrorism Financing (CTF), and Know Your Customer (KYC) Policy (hereinafter referred to as the 'AML/CTF Policy') is to identify, prevent, and mitigate potential risks of the Yasuke cryptocurrency exchange platform being involved in any illegal, fraudulent, or otherwise prohibited activities in applicable jurisdictions.
                  </p>
                  <p className="text-zinc-400">
                    Yasuke is committed to strictly adhering to laws and regulations related to KYC, AML, and CTF, affirming its dedication to avoiding any intentional violations of these policies. Yasuke will implement necessary measures and technologies to provide secure services, thereby maximizing protection against financial losses due to money laundering.
                  </p>
                </section>

                {/* KYC and AML Framework */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">KYC and AML Framework</h2>
                  <p className="text-zinc-400">
                    Yasuke's KYC and AML/CTF policies constitute a comprehensive framework that complies with international standards and jurisdiction-specific regulations. Through a robust compliance infrastructure, Yasuke ensures strict adherence to regulatory requirements and standards at both local and international levels.
                  </p>
                </section>

                {/* Key Measures */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Key Measures</h2>
                  <ol className="list-decimal list-inside space-y-3 text-zinc-400 pl-4">
                    <li>Mandatory KYC (Know Your Customer) and KYB (Know Your Business) verification, including the identification of customers (individuals or entities), beneficial owners (if applicable), and the nature and purpose of the business relationship.</li>
                    <li>Continuous monitoring of user-initiated transactions to detect fraudulent behavior and/or criminal activities. The intensity of monitoring is adjusted based on the user's or transaction's risk profile. A Suspicious Activity Report (SAR) must be filed with the relevant authorities when a user's operation is suspected of being linked to criminal activity, fraudulent behavior, etc.</li>
                  </ol>
                </section>

                {/* Money Laundering */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Money Laundering</h2>
                  <p className="text-zinc-400">
                    Money laundering, as defined by international regulations and legislation aimed at preventing money laundering and terrorism financing, includes the following elements:
                  </p>
                  <ol className="list-decimal list-inside space-y-3 text-zinc-400 pl-4">
                    <li>Changing the legal status of digital assets or transferring them, knowing that these assets originate from criminal activities, with the intent to conceal or disguise their illicit origin or to assist any person involved in criminal activities in evading legal consequences.</li>
                    <li>Concealing or disguising the true nature, origin, source, location, disposition, movement, ownership, or other rights over assets, while being aware that these assets originate from criminal activities.</li>
                    <li>Acquiring, managing, or using assets while knowing, at the time of acquisition or transfer, that these assets originate from a criminal act.</li>
                  </ol>
                </section>

                {/* Terrorism Financing */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Terrorism Financing</h2>
                  <p className="text-zinc-400">
                    Terrorism financing refers to the deliberate provision or collection of funds, by any means, directly or indirectly, intended or knowingly used to facilitate terrorist acts. It involves legitimate entities or individuals providing funds to support terrorist activities or organizations for ideological, political, or other reasons.
                  </p>
                </section>

                {/* Prohibited Activities */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Prohibited Activities</h2>
                  <p className="text-zinc-400">Yasuke prohibits any operations related to the following activities:</p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400 pl-4">
                    <li>Drugs and drug paraphernalia (e.g., narcotics, controlled substances, and any equipment designed to manufacture or use drugs)</li>
                    <li>Weapons, ammunition, gunpowder, and other explosives (including fireworks)</li>
                    <li>Sexually explicit content and related services</li>
                    <li>Pyramid schemes, investment schemes, and other unfair, predatory, or deceptive practices</li>
                  </ul>
                </section>

                {/* Conclusion */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Conclusion</h2>
                  <p className="text-zinc-400">
                    This AML/CTF Policy is effective as of the date of publication on our website and will remain in effect unless future amendments are made. Yasuke reserves the right to update and/or modify the terms of this policy, and it is the user's responsibility to monitor relevant updates to this document.
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