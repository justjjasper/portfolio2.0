import Image from 'next/image';
import tw from 'tailwind-styled-components';

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

const PortraitContainer = tw.div`
  relative flex
  mx-auto lg:mx-0 lg:mt-0 mt-10
`;

const H1 = tw.h1`
  text-6xl xsm:text-7xl lg:text-8xl font-bold
`;

const H3 = tw.h3`
  text-2xl text-[#7B7B7B] font-extralight
  lg:w-[25ch]
`;

const P = tw.p`
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
        <H1>jasper bucad.</H1>
        <H3>I'm a Web Developer based in Los Angeles, California.</H3>
        <P>
          I'm a tech enthusiast with a keen eye for design and create intricate
          websites. When I'm not coding during the week, I'm always on the move
          as a weekend warrior.
        </P>
      </TextContainer>

      {/* Portrait Container */}
      <PortraitContainer>
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
