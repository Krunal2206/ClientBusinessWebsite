import "./globals.css";
import Navbar from "../components/Navigation/Navbar";

export const metadata = {
  title: "H & E Computer Solutions - Reliable IT Services",
  description:
    "H & E Computer Solutions provides exceptional IT services, including hardware solutions, networking, software sales, and repair services tailored to your needs.",
  keywords: [
    "IT services",
    "hardware solutions",
    "computer repair",
    "networking solutions",
    "software sales",
  ],
  author: "H & E Computer Solutions",
  openGraph: {
    type: "website",
    url: "https://hecomputersolutions.in",
    title: "H & E Computer Solutions - Reliable IT Services",
    description:
      "Get the best IT services and solutions, from hardware and software to networking and repairs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
