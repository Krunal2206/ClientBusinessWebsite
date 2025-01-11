import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:text-blue-500 font-medium transition duration-300"
    >
      {children}
    </Link>
  );
}
