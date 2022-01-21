import { ReactNode } from 'react';
import {
  Icon,
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { GiShipWreck } from 'react-icons/gi';
import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';



export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

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
            <Box>{<Icon as={GiShipWreck} w={20} h={20} p={'8px;'} />}</Box>
            <HStack
              as={'nav'}
              spacing={8}
              display={{ base: 'none', md: 'flex' }}
            >
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              colorScheme={'green'}
              size={'sm'}
              mr={5}
              onClick={()=>{navigate('/login')}}>
              Sign In
            </Button>
            </Flex>

            <Button onClick={toggleColorMode} mr={5}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

      </Box>
    </>
  );
}
