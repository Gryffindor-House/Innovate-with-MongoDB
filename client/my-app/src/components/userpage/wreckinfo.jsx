import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

export default function Wreckinfo(): JSX.Element {
  return (
    <Flex
      minH={'100vh'}
      align={'Center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      position={'absolute'}
      left={'1200px'}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Shipwreck Info
        </Heading>
        <FormControl id="Name" isRequired>
          <FormLabel>Name:</FormLabel>
          <Input
            placeholder="Name"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="Location" isRequired>
          <FormLabel>Location:</FormLabel>
          <Input
            placeholder="Enter Location"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="Latitude" isRequired>
          <FormLabel>Latitude:</FormLabel>
          <Input
            placeholder="ex: 3.276533"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="Longitude" isRequired>
          <FormLabel>Longitude:</FormLabel>
          <Input
            placeholder="ex: -61.565292"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="Status of Wreck" isRequired>
          <FormLabel>Wreckage Type:</FormLabel>
          <Input
            placeholder="ex: Broken/Visible"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
         </FormControl>
         <FormControl id="History" isRequired>
          <FormLabel>History:</FormLabel>
          <Input
            placeholder="Related History"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="Depth" isRequired>
          <FormLabel>Depth:</FormLabel>
          <Input
            placeholder="Depth of Wreck"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
          <FormControl id="Water Level" isRequired>
          <FormLabel>Water Level:</FormLabel>
          <Input
            placeholder="Water Level around the area of wreck"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}
          >
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
