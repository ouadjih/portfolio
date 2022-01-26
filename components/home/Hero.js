import {
  Container,
  Stack,
  VStack,
  useBreakpointValue,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <>
    <Flex
    w={'full'}
    h={'100vh'}
    backgroundImage={
      'url(hero.jpg)'
    }
    backgroundSize={'cover'}
    zIndex={-2}
    backgroundPosition={'center center'}>
    <VStack
      w={'full'}
      justify={'center'}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              color={'white'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '80%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'gray.200',
                zIndex: -1,
              }}>
              I AM OUADJIH,
            </Text>
            <br />
            <Text
             as={'span'}
             color={'red.300'}
             text-shadow='1px 1px 2px white'
             >
              FullStack Developper
            </Text>
          </Heading>
    </VStack>
  </Flex>
    </>
  );
}