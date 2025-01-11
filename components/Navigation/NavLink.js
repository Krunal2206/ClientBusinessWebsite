import { memo } from "react";
import Link from "next/link";

const NavLink = memo(function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-white hover:bg-[#00c6ff] p-2 rounded-lg font-semibold text-base transition duration-300"
      role="menuitem"
    >
      {children}
    </Link>
  );
});

export default NavLink;