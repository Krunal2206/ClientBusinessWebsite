// components/Navbar/Navbar.jsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
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
    <nav
      className="fixed top-0 left-0 w-full bg-white/60 backdrop-blur-sm shadow-md z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-14 h-14 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-full flex items-center justify-center shadow-lg p-2">
              <FontAwesomeIcon icon={faComputer} className="text-white text-3xl" />
            </div>
            <span className="text-lg font-bold text-black tracking-wide">
              H & E COMPUTER SALES
            </span>
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map(({ label, href }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
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
