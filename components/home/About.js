import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

export default function About() {
  return (
    <Container maxW={'7xl'} px={{ base: '5', md: '50' }}>
      <Stack
        align={'center'}
        mt={0}
        pt={0}
        spacing={{ base: 8, md: 10,lg: 20 }}
        py={{ base: 10, md: 50 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text as={'span'} color={'#121212'}>
              About
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          My full name is Mohamed Ouadjih Boudraa and I am currently based in Algers, Algeria.
          I started to use the Computer at 5 when i was playing tomb rider and counter strike 1.6 
          then i was thinking how do they create this games , its wonderfull and i want to do the same.<br/>

          My journey stoped here since i was more intrested in sports and studying in the school and college.
          I got baccalaureate degree with honors but it wasn't enough to choose ESI so i went to the alternative choice
          Its M.I branch.<br/>

          Its there where did i start studying algorithms,machine structure and different topics about Maths and CS
          in my second year we started learning about web html , css , js and php  where it was so limited.
          So i went home and i was digging in the net about web developpement where i start discovering a beautifull functionalities 
          It was like MAGIC and there is so much to learn even if you live 1000 years you wont be able to learn everything,
          but what ever i am not going to stop here.<br/>

          a fullstack developper
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'360px'}
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
                'imoji.png'
              }
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}