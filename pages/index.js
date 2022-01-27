import { Stack, Spacer } from '@chakra-ui/react'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Services from '../components/home/Services'
import Stats from '../components/home/Numbers'
import Projects from '../components/home/Projects'
import Testimonials from '../components/home/Testimonials'

export default function Index() {
  return (
    <Stack
      maxW='100%'
      direction='column'
      zIndex={1}
    >
      <Hero />
      <Spacer />
      <About />
      <Services />
      <Projects />
      <Stats />
    </Stack>
  )
}
