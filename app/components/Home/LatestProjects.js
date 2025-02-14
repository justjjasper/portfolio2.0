'use client';
import tw from 'tailwind-styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects } from '../../data';
import Link from 'next/link';
import Image from 'next/image';

import { rightArrowSVG } from '../../assets/svg/icons';

//! ---> STYLES <---
const Container = tw(motion.div)`
  mt-10 py-16 bg-white
  px-5 sm:px-16 lg:px-36
  shadow-2xl
`;

const InnerContainer = tw.div`
  flex flex-col items-center
  border-t-[1.3px] border-custom-white
  relative
`;

const H1 = tw(motion.h1)`
  flex justify-center
  absolute top-[-1rem]
  text-3xl text-custom-white
  w-[40%]
`;

const ProjectsContainer = tw.div`
  flex justify-between w-full
  py-10
`

const SingleProjectLink = tw(Link)`
  w-[22.5rem] h-[21rem]
  bg-custom-white
  shadow-project-shadows
  transition-shadow duration-300 ease-in-out
  hover:shadow-[6px_6px_0px_0px_#808080]
  border-[3px] border-black
`

const ProjectImage = tw.div`
  flex
  h-[15rem]
  p-[1.25rem]
`
const ProjectContent = tw.div`
  flex justify-between
  border-t-[3px] border-black text-black
  p-[1em]
`

//! ---> COMPONENT <---
export default function LatestProjects() {
  const { scrollYProgress } = useScroll();

  // Interpolating colors based on scroll progress
  const background = useTransform(
    scrollYProgress,
    [0, 0.3, 0.8, 1],  // Adjusted for smoother, more noticeable transition
    ['#1E1E1E', '#141414', '#0A0A0A', '#000000'] // More distinct black shades
  );

  return (
    <Container style={{ background }}>
      <InnerContainer>
        <H1 style={{ background }}>SOME OF MY LATEST WORKS</H1>
        <ProjectsContainer>
          { projects.slice(0, 3).map((project => (
            <SingleProjectLink key={project.id} href={project.url} className='text-white' target='_blank'>
              <ProjectImage>
                  {/* ! Roughly 870px x 560px for Project Screenshots */}
                <Image
                  src={project.img}
                  alt={project.name}
                  width={310}
                  height={210}
                  className='object-fit object-center border-[2px] border-black w-full'
                />
              </ProjectImage>
              <ProjectContent>
                <div className='font-proxima'>
                  <h2 className='text-xl font-bold'>{project.name}</h2>
                  <p>{project.subTitle}</p>
                </div>
                <p>
                  { rightArrowSVG }
                </p>
              </ProjectContent>
            </SingleProjectLink>
          )))}
        </ProjectsContainer>
      </InnerContainer>
    </Container>
  );
}
