"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/next.svg"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}
