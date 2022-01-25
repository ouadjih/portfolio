import '../styles/globals.css'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import Layout from '../components/layout/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider >
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Layout> 
          <Component {...pageProps} />
        </Layout> 
      </ColorModeProvider>
    </ChakraProvider>
  )
}
