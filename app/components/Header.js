'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Hamburger from 'hamburger-react';
import tw from 'tailwind-styled-components';
import clsx from 'clsx';

import { linkedInIcon, githubIcon, igIcon } from '../assets/svg/icons';
import { Wrapper } from '../style/base';

//! ---> STYLES <---
const Container = tw(Wrapper)`
  flex items-center justify-center
  h-[65px] md:h-[97px]
  bg-black font-proxima
`;

const NavContainer = tw.nav`
  flex items-center justify-between
  w-full
`;

const Logo = tw(Link)`
  flex items-center justify-center
  rounded-full bg-white hover:bg-gray-600
  md:w-14 md:h-14 w-11 h-11
`;

const MobileMenuItem = tw(Link)`
  block border-b-[0.5px] border-white
  text-center text-3xl hover:text-gray-600 font-proxima
  pb-4
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
  { name: 'about', url: '/about', ariaLabel: 'Visit the About Page' },
  { name: 'projects', url: '/project', ariaLabel: 'Visit the Projects Page' },
  { name: 'contact', url: '/contact', ariaLabel: 'Visit the Contact Page' },
  {
    name: 'home',
    url: '/',
    ariaLabel: 'Visit the Home Page',
    mobileOnly: true,
  },
];

const socialItems = [
  {
    url: 'https://www.linkedin.com/in/jasper-bucad',
    title: 'Connect with me on Linkedin',
    icon: linkedInIcon,
    ariaLabel: `Jasper Bucad's LinkedIn`,
  },
  {
    url: 'https://github.com/justjjasper',
    title: 'View my code on Github',
    icon: githubIcon,
    ariaLabel: `Jasper Bucad's Github Profile`,
  },
  {
    url: 'https://www.instagram.com/onlywithjasper/',
    title: 'Follow me on Instagram',
    icon: igIcon,
    ariaLabel: `Jasper Bucad's Instagram`,
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
        <Logo href='/' aria-label='Go to Home Page'>
          <span className='text-black text-2xl md:text-3xl font-medium'>
            JB
          </span>
        </Logo>

        {/* Nav Items */}
        <nav>
          <NavItemContainer>
            {menuItems
              .filter((item) => !item.mobileOnly) // Exclude mobile-only items
              .map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.url}
                    aria-label={item.ariaLabel}
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
                    aria-label={item.ariaLabel}
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

        {/* Mobile Menu Button */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setToggleMenu(!toggleMenu)}
          aria-expanded={toggleMenu}
          aria-label={toggleMenu ? 'Close menu' : 'Open menu'}
          className='block md:hidden'
        >
          <Hamburger
            color={isHovered ? 'gray' : 'white'}
            transitionDuration={0.3}
            toggled={toggleMenu}
            toggle={setToggleMenu}
            aria-label='Mobile Menu'
          />
        </button>

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
                <MobileMenuItem href={item.url} aria-label={item.ariaLabel}>
                  {item.name}
                </MobileMenuItem>
              </li>
            ))}
          </ul>
          <ul className='flex items-center justify-center gap-8 py-8'>
            {socialItems.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.url}
                  title={item.title}
                  aria-label={item.ariaLabel}
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
