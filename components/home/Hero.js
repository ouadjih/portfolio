import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        mt={0}
        pt={0}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 100 }}
        direction={{ base: 'column', md: 'row' }}>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'300px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}>
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src={
                'hero.jpg'
              }
            />
          </Box>
        </Flex>

        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.300',
                zIndex: -1,
              }}>
              I AM OUADJIH,
            </Text>
            <br />
            <Text as={'span'} color={'#F05454'}>
              FullStack Developper
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          You’re a gifted human being with intelligence<br/>
          Show your prodigy and prove your confidence<br/>
          The world is so wonderful with opportunities<br/>
          In which you live around many communities. 
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={'red'}
              bg={'red.400'}
              _hover={{ bg: 'red.600' }}>
              About 
            </Button>
          </Stack>
        </Stack>

      </Stack>
    </Container>
  );
}