import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { server_URL } from '../../config/urls';

import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Center,
  Text,
} from '@chakra-ui/react';

import { useUserAuth } from '../../context/UserAuthContext';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [email, set_email] = useState('');
  const [password, set_password] = useState('');

  const handleGoogleSignIn = async e => {
    e.preventDefault();
    try {
      await googleSignIn();
      console.log('Logged In');
      navigate('/user');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handle_login = async () => {
    let params = { email: email, password: password };
    axios.post(server_URL + 'login', params).then(result => {
      console.log(result);
    });
  };
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack minH={'90vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={7} w={'full'} maxW={'md'}>
          <Heading fontSize="38px">Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={e => set_email(e.target.value)}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={e => set_password(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.500'}>Forgot password?</Link>
            </Stack>
            <Button
              colorScheme={'blue'}
              variant={'solid'}
              onClick={handle_login}
            >
              Sign in
            </Button>
            <Button
              w={'full'}
              variant={'outline'}
              leftIcon={<FcGoogle />}
              onClick={handleGoogleSignIn}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://miro.medium.com/max/1080/0*G_W4PEC6F5eZePDU.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}
