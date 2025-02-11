'use client';
import tw from 'tailwind-styled-components';
import { Wrapper } from '../../style/base';

//! ---> STYLES <---
const Container = tw.div`
  mt-10
  py-16
bg-white shadow-2xl
  h-[500px]
`;

const InnerContainer = tw.div`
  flex flex-col items-center border-t-[1.3px] border-gray relative
`;

//! ---> COMPONENT <---
export default function LatestProjects() {
  return (
    <Container>
      <InnerContainer>Hello</InnerContainer>
    </Container>
  );
}
