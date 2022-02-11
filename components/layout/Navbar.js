import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgClose } from 'react-icons/cg'
const Links = ['Home', 'Projects', 'Contact'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'sm'}
    textDecoration= {'none'}
    _hover={{
      textDecoration: 'none',
      color: '#F05454'
    }}
    href={children}>
    {children}
  </Link>
);

export default  function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box  px={4} bgColor={'#F5F5F5'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            color={'#121212'}
            size={'sm'}
            icon={isOpen ? <CgClose size={28}/> : <GiHamburgerMenu size={28} />}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            _hover={{
                textDecoration: 'none',
              }}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Link href='/'>
              <Image h='48px' w="54px" src="logo.png"/>
            </Link>
            <HStack
              as={'nav'}
              spacing={5}
              fontSize={'lg'}
              fontWeight={'bold'}
              display={{ base: 'none', md: 'flex' }}
              pl={550}
              >
              {Links.map((link) => (
                <NavLink key={link} href={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4} >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

