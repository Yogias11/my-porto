'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="relative flex items-center justify-between px-10 py-6 bg-[#0a0a0a] text-white">
      <Link href="/" className="text-xl font-bold">
        <span className="text-[#7c3aed]">Yogi</span>Aditya
      </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
            <Link
                key={item.href}
                href={item.href}
                className={`hover:text-blue-500 transition-colors ${
                pathname === item.href ? "text-blue-500" : ""
                }`}
            >
                {item.name}
            </Link>
            ))}

            <Link
            href="/contact"
            className="px-5 py-2 border border-[#4c1d95] text-[#8b5cf6] rounded-md hover:bg-[#4c1d95] hover:text-white transition-all"
            >
            Contact Me
            </Link>
        </div>

        {/* Mobile Navigation */}

        <button className="md:hidden text-gray-300 hover:text-white z-50"
            onClick={() => setIsOpen(!isOpen)}
            >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-gray-800 transition-all duration-300 ease-in-out md:hidden
            ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
            <div className="flex flex-col p-6 gap-4">
                {navItems.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`hover:text-blue-500 transition-colors ${
                    pathname === link.href ? "text-blue-500" : ""
                    }`}
                >
                    {link.name}
                </Link>
                ))}
                <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-2 text-center px-5 py-3 border border-[#4c1d95] text-[#8b5cf6] rounded-md"
                >
                    Contact Me
                </Link>
            </div>
        </div>
    </nav>
  )

};

export default Navbar;