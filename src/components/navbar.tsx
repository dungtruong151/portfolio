"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Resume",
    href: "/resume",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  //   console.log(pathname);
  return (
    <nav className="flex gap-4">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.href}
            className={`${
              pathname === link.href
                ? "border-b-2 border-orange-500 text-orange-500 mx-2"
                : "hover:text-orange-500 mx-2"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
