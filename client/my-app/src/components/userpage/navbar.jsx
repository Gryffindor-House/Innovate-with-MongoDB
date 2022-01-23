import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Center,
  Fade,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from 'react-router';
import FAQs from './FAQ';
import Wreckinfo from './wreckinfo';
import { FaQq } from 'react-icons/fa';

const Links = ['Wreck Maps and Form', 'FAQs'];

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [display, setdisplay] = useState(false);
  const [displayid, setdisplayid] = useState(false);
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>DashBoard</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(link => {
                return (
                  <div>
                    {' '}
                    <Link
                      px={2}
                      py={1}
                      rounded={'md'}
                      _hover={{
                        textDecoration: 'none',
                      }}
                      href={'#'}
                      onClick={() => {
                        link == 'FAQs'
                          ? setdisplayid(!displayid)
                          : setdisplayid(false);
                      }}
                    >
                      {link}
                    </Link>
                  </div>
                );
              })}
            </HStack>
            <Fade in={displayid}>
              <Box
                p="40px"
                color="white"
                mt="4"
                bg="teal.500"
                rounded="md"
                shadow="md"
              >
                <FAQs />
              </Box>
            </Fade>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}
                >
                  <Avatar
                    size={'sm'}
                    src={
                      'https://www.clipartmax.com/png/middle/347-3477367_480-user-icon-svg.png'
                    }
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={
                        'https://www.clipartmax.com/png/middle/347-3477367_480-user-icon-svg.png'
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Hello, User </p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
