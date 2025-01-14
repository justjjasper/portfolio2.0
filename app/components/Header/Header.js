'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { linkedInIcon, githubIcon, igIcon } from '../../assets/svg/icons';
import tw from 'tailwind-styled-components';
import clsx from 'clsx';

//! ---> STYLES <---
const Container = tw.header`
  flex items-center justify-center
  xl:px-0 px-4
  h-[97px]
  bg-black
  font-proxima
`;

const NavContainer = tw.nav`
  flex items-center justify-between
  w-full max-w-[1200px]
`;

const NavItemContainer = tw.ul`
  flex justify-evenly gap-8
`;

//! ---> SEEDED DATA <---
const menuItems = [
  { name: 'about', url: '/about' },
  { name: 'projects', url: '/project' },
  { name: 'contact', url: '/contact' },
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
            {menuItems.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    href={item.url}
                    className={clsx(
                      pathname === item.url ? 'text-gray-600' : 'text-white',
                      'font-proxima text-lg hover:text-gray-600'
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
        <nav>
          <NavItemContainer className='flex items-center justify-evenly'>
            {socialItems.map((item, i) => {
              return (
                <li key={i}>
                  <Link
                    href={item.url}
                    title={item.title}
                    target='_blank'
                    className='inline hover:text-gray-600 text-white'
                  >
                    {item.icon('w-8 h-8', 'currentColor')}
                  </Link>
                </li>
              );
            })}
          </NavItemContainer>
        </nav>
      </NavContainer>
    </Container>
  );
}
