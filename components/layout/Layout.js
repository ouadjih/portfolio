import { Flex, Spacer } from '@chakra-ui/react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='logo.png'/>
        <title>Mohamed Ouadjih</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Flex
        bg='white'
        h='100%'
        w='100%'
        flexDirection='column'
        minH='100vh'
        zIndex={1}
        position='relative'
      >
        <Navbar />
        { children }
        <Footer />
      </Flex>
    </>
  )
}
