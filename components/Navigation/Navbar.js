// components/Navbar/Navbar.jsx
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import HamburgerMenu from "./HamburgerMenu";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
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
          {menuItems.map(({ label, href }) => (
            <NavLink key={href} href={href}>{label}</NavLink>
          ))}
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <HamburgerMenu menuItems={menuItems} />
        </div>
      </div>
    </nav>
  );
}
