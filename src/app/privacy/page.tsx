import { SiteHeader } from "@/components/site-header"
import Link from "next/link"
import Image from "next/image"

export default function Privacy() {
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
                Privacy Policy
              </h1>

              <div className="glass-dark rounded-2xl p-8 space-y-8">
                {/* Introduction */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Introduction</h2>
                  <p className="text-zinc-400">
                    This Privacy Policy governs how Yasuke (hereinafter referred to as &apos;Yasuke&apos;, &apos;we&apos;, or &apos;us&apos;) collects, uses, processes, stores, and discloses information collected from users of our website https://yasuke.exchange (the &apos;Site&apos;) to provide the services available on it (the &apos;Services&apos;).
                  </p>
                  <p className="text-zinc-400">
                    We strictly adhere to the requirements of the European Union&apos;s General Data Protection Regulation (GDPR), the ePrivacy Directive, and the Data Protection Act, ensuring compliance with regulations applicable in the European Economic Area (EEA) regarding the processing of personal information.
                  </p>
                </section>

                {/* Scope */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Scope of the Policy</h2>
                  <p className="text-zinc-400">
                    This policy applies when you use our website, services, and products, or when you contact us (e.g., via email or a form on the website). By creating an account on the platform and checking the consent box, you accept this policy.
                  </p>
                </section>

                {/* User Consent */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">User Consent</h2>
                  <p className="text-zinc-400">
                    Your use of the Site, our services, products, and your interactions with us, after reviewing this policy, constitutes your consent to this Privacy Policy and all data processing practices described herein.
                  </p>
                  <p className="text-zinc-400">
                    If you do not agree with the terms of this policy, we advise you not to use our website, mobile applications, services, or open an account with Yasuke.
                  </p>
                </section>

                {/* Contact Information */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Contact Information</h2>
                  <p className="text-zinc-400">
                    For any questions regarding this policy or your personal data, please contact our Data Protection Officer at dpo@yasuke.com.
                  </p>
                </section>

                {/* GDPR Overview */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Overview of GDPR</h2>
                  <p className="text-zinc-400">
                    The General Data Protection Regulation (GDPR) is an EU regulation that strengthens the protection of personal data and privacy. It requires organizations to implement privacy measures, provide clear and detailed information about privacy practices, and ensure data protection by design and by default.
                  </p>
                </section>

                {/* Definitions */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Definitions</h2>
                  <div className="space-y-2 text-zinc-400">
                    <p><strong className="text-zinc-200">Personal Data:</strong> Any information relating to an identified or identifiable natural person. This includes, but is not limited to, name, email address, financial information, and IP address.</p>
                    <p><strong className="text-zinc-200">Processing:</strong> Any operation performed on personal data, whether automated or not, such as collection, recording, organization, storage, adaptation, retrieval, consultation, use, disclosure, alignment, restriction, erasure, or destruction.</p>
                  </div>
                </section>

                {/* Data Collection */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Data Collection</h2>
                  <p className="text-zinc-400">Yasuke collects personal information to provide and improve its services. The types of personal data we may collect include:</p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400 pl-4">
                    <li>User-provided information: Name, address, email, phone number, identification documents, and financial records.</li>
                    <li>Data collected during service use: Transaction details, device information, IP address, and site activity.</li>
                    <li>Third-party data: Information from credit agencies, financial partners, and service providers.</li>
                  </ul>
                </section>

                {/* Data Usage */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Data Usage</h2>
                  <p className="text-zinc-400">We use personal data for the following purposes:</p>
                  <ul className="list-disc list-inside space-y-2 text-zinc-400 pl-4">
                    <li>Account registration and management.</li>
                    <li>Compliance with legal obligations, including KYC and AML requirements.</li>
                    <li>Improvement of services and user experience.</li>
                    <li>Marketing and communication, based on user preferences.</li>
                  </ul>
                </section>

                {/* User Rights */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">User Rights</h2>
                  <p className="text-zinc-400">Under GDPR, users have the following rights regarding their personal data:</p>
                  <ul className="list-decimal list-inside space-y-2 text-zinc-400 pl-4">
                    <li>Right to be informed: Know how your data is collected and used.</li>
                    <li>Right of access: Request access to your personal data.</li>
                    <li>Right to rectification: Correct inaccurate or incomplete data.</li>
                    <li>Right to erasure: Request deletion of your data under certain conditions.</li>
                    <li>Right to restrict processing: Limit the processing of your data.</li>
                    <li>Right to data portability: Transfer your data to another service provider.</li>
                    <li>Right to object: Object to data processing for specific purposes.</li>
                    <li>Right to withdraw consent: Withdraw consent at any time.</li>
                  </ul>
                </section>

                {/* Data Security */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Data Security</h2>
                  <p className="text-zinc-400">
                    We implement strict security measures to protect personal data from unauthorized access, alteration, disclosure, or destruction. These measures include encryption protocols, restricted access, and regular security audits.
                  </p>
                </section>

                {/* Policy Updates */}
                <section className="space-y-4">
                  <h2 className="text-2xl font-bold gradient-text">Policy Updates</h2>
                  <p className="text-zinc-400">
                    This Privacy Policy may be updated periodically to reflect changes in our practices or legal requirements. Users are encouraged to review this policy regularly to stay informed about how we manage personal data.
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