import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
  Flex
} from '@chakra-ui/react';
import {SiJavascript, SiPhp, SiHtml5, SiCss3, SiChakraui, SiNextdotjs, SiReact, SiJava, SiMysql} from 'react-icons/si'


   


export default function services() {
  // features
const features = [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiJava />, <SiMysql/>, <SiChakraui />, <SiNextdotjs />, <SiReact /> 
];

  return (
    <Box p={4} py={{ base: 8, md: 12, lg: 16 }} bgColor={'#F05454'}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
      <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text as={'span'} color={'#F5F5F5'}>
              Services
            </Text>
          </Heading>
        <Text color={'gray.200'} fontSize={'xl'}>
         here are some technologies that i use to develop your next buissness ...
        </Text>
      </Stack>
      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          
          {features.map((element, index) => (
            <HStack key={index} align={'top'}>
              <Stack>
                <Flex
                  w={16}
                  h={16}
                  align={'center'}
                  justify={'center'}
                  mb={1}
                  mx={120}>
                    <Text fontSize='5xl' color={'white'}>
                      {element}
                    </Text>
                </Flex>
              </Stack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
