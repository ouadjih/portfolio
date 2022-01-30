import {React,useState} from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  Container,
  Image,
  Heading,
  Spacer
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Projects() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Dashboard Sonatrach',
      text:
      'Dashboard sonatrach is an exclusive Web application for project management. It\'s perfect for manager and project leader to communicate different attributes of exploration project.'
      ,
      image:
        'projet2.png',
    },
    {
      title: 'Design Projects',
      text:
        'The project board is an exclusive resource for contract work. It\'s perfect for freelancers, agencies, and moonlighters.',
      image:
          'projet1.png'    },
    {
      title: 'Design Projects 3',
      text:
        'The project board is an exclusive resource for contract work. It\'s perfect for freelancers, agencies, and moonlighters.',
      image:
        'projet4.png',
    },
  ];

  return (
    <Box p={2} pt={{ base: 8, md: 12, lg: 16 }} bgColor={'#30475E'}>
    <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
        <Text as={'span'} color={'#F5F5F5'}>
          Projects
        </Text>
      </Heading>
      <Text color={'gray.200'} fontSize={'xl'}>
       here are some projects that i developped before, some of them are for university others are for clients
      </Text>
    </Stack>
    <Box
      position={'relative'}
      height={'300px'}
      mt={10}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          color={'white'}
          top={['82%','42%']}
          pl={['10px','15%','3%','10%','20%']}
          mx={2}
          zIndex={2}
          opacity={0.7}
          transform={'translate(0%, -50%)'}
          zIndex={2}
          _hover={{
            textColor: 'white',
            fontWeight: 'extrabold',
          }}
          _active={{
            transform: 'scale(0.98)'
          }}
          _focus={{  }}
          onClick={() => slider?.slickPrev()}>
          <BsChevronLeft size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          bg='none'
          color={'white'}
          top={['82%','42%']}
          pl={['82%','85%','90%','70%','75%']}
          mx={2}
          zIndex={2}
          opacity={0.7}
          transform={'translate(0%, -50%)'}
          zIndex={1}
          _hover={{
            textColor: 'white',
            fontWeight: 'extrabold',
          }}
          _active={{
            transform: 'scale(0.98)'
          }}
          _focus={{ }}
          onClick={() => slider?.slickNext()}>
          <BsChevronRight size="40px" />
        </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
          >
            <Container size="container.lg" height="600px" position="relative" >
              <Stack direction={{ base: 'column', md: 'row' }} alignItems={'center'} >
                <Box
                    position={'relative'}
                    height={'full'}
                    width={'full'}
                    px={{base:'7px', md:'17px'}}
                    borderRadius={'lg'}
                    overflow={'hidden'}>
                    <Image
                      alt={card.title}
                      align={'center'}
                      w={'100%'}
                      h={'100%'}
                      border={'3px solid gray'}
                      borderRadius={'2px'}
                      src={
                        card.image
                      }
                    />
                  </Box>
              </Stack>
             </Container>
          </Box>
        ))}
      </Slider>
    </Box>
    </Box>
  );
}
