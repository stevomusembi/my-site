"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const navItems = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/contact", label: "Contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const path = usePathname();

  const normalLink = "text-gray-700 hover:text-blue-500";
  const activeLink = "text-blue-500 font-semibold";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="flex basis-1/4 items-center justify-between mx-5 my-5 px-4">
        <span className="text-lg font-bold">
          <span className="bg-blue-500 py-1 px-4 mr-2 max-sm:hidden"></span> 
          Steven Musembi <small>/ Software Engineer</small>
        </span>
        
        {/* Desktop Menu */}
        <ul className="flex basis-1/3 justify-end space-x-4 max-sm:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                className={`${path === item.href ? activeLink : normalLink}`}  
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu} 
          className="sm:hidden absolute top-5 right-5 z-50 text-blue-600"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Side Navigation Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Side Navigation */}
      <div 
        className={`
          fixed top-0 left-0 h-full w-2/3 bg-brown z-50 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <ul className="flex flex-col p-8 space-y-6 mt-16 ">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                onClick={toggleMenu}
                className={`
                  block text-xl py-4 mb-4
                  ${path === item.href ? activeLink : normalLink}
                `}  
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}