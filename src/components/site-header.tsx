"use client"

import Link from "next/link"
import Image from "next/image"
import { MainNav } from "@/components/main-nav"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LineChart,
  ArrowLeftRight,
  Wallet,
  DollarSign,
  CreditCard,
  Trophy,
  ListPlus,
  Rocket,
  TrendingUp,
  Shield,
} from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-[#0a0b0f]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a0b0f]/60">
      <div className="container flex h-[82px] items-center">
        <Link href="/" className="mr-8 group">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="/images/yasuke-logo.png"
              alt="Yasuke Exchange"
              width={246}
              height={82}
              priority
              className="relative h-[82px] w-auto"
            />
          </div>
        </Link>
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex justify-end space-x-2">
            <Button variant="ghost" asChild className="hover:bg-zinc-800">
              <Link href="/account/login">Sign In</Link>
            </Button>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="relative bg-[#1d1e24] text-zinc-100 hover:bg-[#1d1e24]/80">Menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px] bg-[#1d1e24] border-zinc-800">
                  <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800 text-zinc-100">
                    <Link href="/account/trade/BTC-USDT" className="flex items-center gap-2">
                      <LineChart className="h-4 w-4" />
                      Trade
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800 text-zinc-100">
                    <Link href="/account/quick-swap" className="flex items-center gap-2">
                      <ArrowLeftRight className="h-4 w-4" />
                      Swap
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800 text-zinc-100">
                    <Link href="/account/wallet" className="flex items-center gap-2">
                      <Wallet className="h-4 w-4" />
                      Wallet
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800 text-zinc-100">
                    <Link href="/account/quick-swap" className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Buy/Sell Crypto
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800 text-zinc-100">
                    <Link href="/coming-soon" className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Card
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800 text-zinc-100">
                    <Link href="/coming-soon" className="flex items-center gap-2">
                      <Trophy className="h-4 w-4" />
                      Trading Competition
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800 text-zinc-100">
                    <Link href="/token-listing" className="flex items-center gap-2">
                      <ListPlus className="h-4 w-4" />
                      Token Listing
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800 text-zinc-100">
                    <Link href="/ieo" className="flex items-center gap-2">
                      <Rocket className="h-4 w-4" />
                      IEO
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800 text-zinc-100">
                    <Link href="/coming-soon" className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Market Making
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="hover:bg-zinc-800 focus:bg-zinc-800 text-zinc-100">
                    <Link href="/kyc-policy" className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      AML/KYC
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 