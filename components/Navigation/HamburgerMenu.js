"use client";

import { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function HamburgerMenu({menuItems}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to toggle the menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 focus:outline-none"
      >
      {isOpen ? (
        <MdClose className="h-6 w-6" />
      ) : (
        <GiHamburgerMenu className="h-6 w-6" />
      )}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4">
            {menuItems.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-gray-700 hover:text-white hover:bg-[#00c6ff] font-semibold text-lg p-1 pl-2 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
