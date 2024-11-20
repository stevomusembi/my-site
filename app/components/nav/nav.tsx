"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
    const navItems = [
        { href: "/about", label: "About Me" },
        { href: "/projects", label: "Projects" },
        { href: "/contact", label: "Contact" },
    ];

   let path = usePathname();
   const [currentPage,setCurrentPage] = useState(path);
   const normalLink = "hover:text-blue-500";
   const activeLink = "text-blue-500";


   useEffect(() => {
    setCurrentPage(path);
   }, [path]);
  

  
    return (
        <nav className="flex basis-1/4 items-center justify-between mx-5 my-5 px-4">
            <span className="text-lg font-bold">
                Steven Musembi <small>/ Software Engineer</small>
            </span>
            <ul className="flex basis-1/3 justify-end space-x-4">
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link className={`${currentPage === item.href ? activeLink : normalLink}`}  href={item.href}>
                           {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
