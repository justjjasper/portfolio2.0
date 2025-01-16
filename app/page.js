import tw from 'tailwind-styled-components';

import Hero from './components/Home/Hero';
import LatestProjects from './components/Home/LatestProjects';

//! ---> STYLES <---
const Container = tw.main`
  min-h-[100vh]
`;

export default function Home() {
  return (
    <Container>
      <Hero/>
      <LatestProjects/>
    </Container>
  );
}
