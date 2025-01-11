"use client";

import { useState } from "react";
import Link from "next/link";

export default function HamburgerMenu({menuItems}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Button to toggle the menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-800 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
          />
        </svg>
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
