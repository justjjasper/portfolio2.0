'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { linkedInIcon, githubIcon, igIcon } from '../../assets/svg/icons';
import Hamburger from 'hamburger-react';
import tw from 'tailwind-styled-components';
import clsx from 'clsx';

//! ---> STYLES <---
const Container = tw.header`
  flex items-center justify-center
  px-5 sm:px-16 lg:px-36
  h-[65px] md:h-[97px]
  bg-black font-proxima
`;

const NavContainer = tw.nav`
  flex items-center justify-between
  w-full max-w-[1200px]
`;

const NavItemContainer = tw.ul`
  hidden justify-evenly gap-8
  md:flex
`;

const MobileMenu = tw.div`
  w-full bg-black z-50
  md:hidden fixed top-[65px] right-0 h-[calc(100vh-65px)]
  transform transition-transform duration-500 ease-in-out
`;

//! ---> SEEDED DATA <---
const menuItems = [
  { name: 'about', url: '/about' },
  { name: 'projects', url: '/project' },
  { name: 'contact', url: '/contact' },
  { name: 'home', url: '/', mobileOnly: true },
];

const socialItems = [
  {
    url: 'https://www.linkedin.com/in/jasper-bucad',
    title: 'Connect with me on Linkedin',
    icon: linkedInIcon,
  },
  {
    url: 'https://github.com/justjjasper',
    title: 'View my code on Github',
    icon: githubIcon,
  },
  {
    url: 'https://www.instagram.com/onlywithjasper/',
    title: 'Follow me on Instagram',
    icon: igIcon,
  },
];

//! ---> COMPONENT <---
export default function Header() {
  const pathname = usePathname();

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <NavContainer>
        {/* Logo */}
        <Link
          className='flex items-center justify-center rounded-full bg-white md:w-14 md:h-14 w-11 h-11 hover:bg-gray-600'
          href='/'
        >
          <span className='text-black text-2xl md:text-3xl font-medium'>
            JB
          </span>
        </Link>

        {/* Nav Items */}
        <nav>
          <NavItemContainer>
            {menuItems
              .filter((item) => !item.mobileOnly) // Exclude mobile-only items
              .map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.url}
                    className={clsx(
                      pathname === item.url ? 'text-gray-600' : 'text-white',
                      'font-proxima text-xl hover:text-gray-600'
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </NavItemContainer>
        </nav>

        {/* Socials */}
        <nav>
          <NavItemContainer>
            {socialItems.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    href={item.url}
                    title={item.title}
                    target='_blank'
                    className='hover:text-gray-600 text-white'
                  >
                    {item.icon('w-8 h-8', 'currentColor')}
                  </Link>
                </li>
              );
            })}
          </NavItemContainer>
        </nav>

        {/* Mobile Menu Hamburger */}
        <div
          className='block md:hidden'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Hamburger
            color={isHovered ? 'gray' : 'white'}
            transitionDuration={0.3}
            toggled={toggleMenu}
            toggle={setToggleMenu}
          />
        </div>

        {/* Mobile Menu Content */}
        <MobileMenu
          className={clsx(
            toggleMenu ? 'translate-x-0' : 'translate-x-full',
            'w-full'
          )}
        >
          <ul className='flex flex-col items-center text-white mt-20 gap-8'>
            {menuItems.map((item, i) => (
              <li key={i} className='w-full'>
                <Link
                  href={item.url}
                  className='block text-center text-3xl hover:text-gray-600 font-proxima pb-4 border-b-[0.5px] border-white'
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='flex items-center justify-center gap-8 py-8'>
            {socialItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.url}
                  title={item.title}
                  target='_blank'
                  className='hover:text-gray-600 text-white'
                >
                  {item.icon('w-10 h-10', 'currentColor')}
                </Link>
              </li>
            ))}
          </ul>
        </MobileMenu>
      </NavContainer>
    </Container>
  );
}
