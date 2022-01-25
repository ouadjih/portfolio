import { Stack, Box } from '@chakra-ui/react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import Stats from '../components/Home/Numbers'
import Projects from '../components/Home/Projects'
import Testimonials from '../components/Home/Testimonials'

export default function Index() {
  return (
    <Stack
      maxW='100%'
      direction='column'
      zIndex={1}
    >
      <Hero />
      <About />
      <Services />
      <Projects />
      <Stats />
    </Stack>
  )
}
