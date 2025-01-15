'use client'
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

//! ---> STYLES <---
const Container = tw.div`
  border-2 border-black
  flex flex-col
  lg:flex-row lg:justify-between lg:items-center
  px-5 sm:px-16 lg:px-36
  py-16
`;

const TextContainer = tw.div`
  font-proxima text-[#333333]
  flex flex-col gap-8
`;

const PortraitContainer = tw(motion.div)`
  relative flex
  mx-auto lg:mx-0 lg:mt-0 mt-10
`;

const H1 = tw(motion.h1)`
  text-6xl xsm:text-7xl lg:text-8xl font-bold
`;

const H3 = tw(motion.h3)`
  text-2xl text-[#7B7B7B] font-extralight
  lg:w-[25ch]
`;

const P = tw(motion.p)`
  text-lg font-light
  lg:w-[43ch]
`;

const PortraitShadow = tw.div`
  absolute top-[8px] left-[12px] z-[-99]
  w-[370px] h-[440px]
  bg-black rounded-[25px]
`;

export default function Home() {
  return (
    <Container>
      {/* Text Container */}
      <TextContainer>
        <H1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          jasper bucad.
        </H1>
        <H3
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          I'm a Web Developer based in Los Angeles, California.
        </H3>
        <P
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
        >
          I'm a tech enthusiast with a keen eye for design and create intricate
          websites. When I'm not coding during the week, I'm always on the move
          as a weekend warrior.
        </P>
      </TextContainer>

      {/* Portrait Container */}
      <PortraitContainer
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src='/images/moi.jpeg'
          alt='Picture of moi'
          width={370}
          height={440}
          className='rounded-[25px] min-w-[370px] min-h-[440px]'
        />
        <PortraitShadow />
      </PortraitContainer>
    </Container>
  );
}
