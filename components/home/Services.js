import {
  Box,
  Container,
  Heading,
  Grid,
  Text,
  Stack,
  HStack,
  Flex
} from '@chakra-ui/react';
import {SiJavascript, SiHtml5, SiCss3, SiChakraui, SiNextdotjs, SiReact, SiJava, SiMysql} from 'react-icons/si'

export default function services() {
  // features
const features = [<SiHtml5 />, <SiCss3 />, <SiJavascript />, <SiJava />, <SiMysql/>, <SiChakraui />, <SiNextdotjs />, <SiReact /> 
];

  return (
    <Box p={4} py={{ base: 6, md: 8, lg: 10 }} bgColor={'#F05454'}>
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
      <Grid
          ml={['25%','20%','7%']}
          mt={[16, 12, 0]} 
          templateRows={['repeat(2, 1fr)','repeat(3, 1fr)','repeat(3, 1fr)']}
          templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(4, 1fr)']}
          gap={5}
          alignItems={'center'}
        >
          {features.map((element, index) => (
            <HStack key={index} align={'top'}>
              <Stack>
                <Flex
                  w={16}
                  h={16}
                  align={'center'}
                  justify={'center'}
                  mx={10}
                  mt={5}>
                  <Text fontSize='5xl' color={'white'}>
                    {element}
                  </Text>
                </Flex>
              </Stack>
            </HStack>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
