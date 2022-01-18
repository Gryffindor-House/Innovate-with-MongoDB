import React from 'react';
import { Flex, Text, HStack } from '@chakra-ui/react';

function Footer(){
  return (
    <Flex
      bg="white"
      width="100%"
      justifyContent="center"
      alignItems="center"
      direction="column"
      boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
      padding={4}
    >
      <HStack spacing={8} mb={8}>
        <Text color="gray.400">About Us</Text>
        <Text color="gray.400">Contact</Text>
      </HStack>
      <Flex width="100%" justifyContent="center" wrap="wrap">
        <Text width="50%" textAlign="center" color="gray.600" fontSize="lm">
          Team Gryffindor
        </Text>
      </Flex>
    </Flex>
  );
};

export default Footer;
