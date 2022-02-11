import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Numbers() {
  return (
    <Box maxW="9xl" mx={{ base: 5, sm: 12, md: 20 }} pb={{ base: 5, sm: 10, md: 20 }} px={{ base: 5, sm: 12, md: 40 }} color={'#30475E'}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        color={'#30475E'}
        py={10}
        fontWeight={'bold'}>
        Currently
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'I am working with'} stat={'10 people'} />
        <StatsCard title={'In'} stat={'5 different countries'} />
        <StatsCard title={'Who speak'} stat={'4 different languages'} />
      </SimpleGrid>
    </Box>
  );
}
