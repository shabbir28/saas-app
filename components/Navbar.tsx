"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/Navitems";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>

      {/* Right side (Desktop + Mobile) */}
      <div className="flex items-center gap-4">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
        </div>

        {/* Auth Buttons always visible */}
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-in menu */}
          <div className="ml-auto w-3/4 sm:w-1/2 h-full bg-white shadow-lg p-6 flex flex-col gap-6 transform transition-transform duration-300 ease-in-out translate-x-0">
            <NavItems />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
