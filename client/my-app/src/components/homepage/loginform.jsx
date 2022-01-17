import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import GoogleButton from "react-google-button";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'


function LoginForm() {
  const { googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      console.log("Logged In");
      navigate("/user");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

    const [show, setShow] = React.useState(false)

    const handleClick = () => setShow(!show)

  

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Sign In</h2>
                <p>
                  Login to our Comprehensive Weather App Dashboard!
                </p>
              </div>
              <FormControl isInvalid={isError}>
      <FormLabel htmlFor='email'>Email</FormLabel>
      <Input
        id='email'
        type='email'
        value={input}
        onChange={handleInputChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
            <Button colorScheme='teal' size='lg'>
    Button
  </Button>
                <GoogleButton onClick={handleGoogleSignIn} />
                </FormControl>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Reach Out</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
              </p>
              Chennai, Tamil Nadu
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-github'></i> Github Organisation
                </span>
              </p>
              Gryffindor-House
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>
              </p>
              covibuddy@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
