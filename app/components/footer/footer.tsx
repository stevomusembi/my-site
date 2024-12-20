"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    const socialIcons = [
        { href: "https://www.linkedin.com/in/stevenmusembi", icon: faLinkedinIn },
        { href: "https://github.com/stevomusembi", icon: faGithub },
        { href: "https://www.instagram.com/steven_musembi", icon: faInstagram },
    ];
    const year = new Date().getFullYear();

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-brown ">
            <ul className="flex  justify-end ">
                {socialIcons.map((item) => (
                    <li key={item.href} className="p-4">
                        <Link href={item.href}>
                            <FontAwesomeIcon className="hover:text-blue-500" icon={item.icon} size="2x" />
                        </Link>
                    </li>
                ))}
            </ul><br/>
            <span className="text-stone-500 text-sm md:text-lg font-bold">
            stevenmusembi.com &copy; {year}</span>
          
        </div>
    )
};