"use client";

import tw from "tailwind-styled-components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

//! ---> STYLES <---
const Container = tw.header`
  flex items-center justify-center
  xl:px-0 px-4
  h-[90px]
  bg-black
  font-proxima
`;

const NavContainer = tw.nav`
  flex items-center justify-between
  border-2 border-white
  w-full max-w-[1200px]
  text-white
`;

const NavItemContainer = tw.ul`
  flex justify-evenly gap-8
`;

const menuItems = [
  // { name: 'home', url: '/' },
  { name: "about", url: "/about" },
  { name: "projects", url: "/project" },
  { name: "contact", url: "/contact" },
];

//! ---> COMPONENT <---
export default function Header() {
  const pathname = usePathname();

  return (
    <Container>
      <NavContainer>
        {/* Logo */}
        <Link
          className="flex items-center justify-center rounded-full bg-white md:w-14 md:h-14 w-11 h-11 hover:bg-gray-600"
          href="/"
        >
          <span className="text-black text-2xl md:text-3xl font-medium">
            JB
          </span>
        </Link>

        {/* Nav Items */}
        <nav>
          <NavItemContainer>
            {menuItems.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    href={item.url}
                    className={clsx(
                      pathname === item.url ? "text-gray-600" : "text-white",
                      "font-proxima text-lg hover:text-gray-600"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </NavItemContainer>
        </nav>

        {/* Socials */}
        <nav></nav>
      </NavContainer>
    </Container>
  );
}
