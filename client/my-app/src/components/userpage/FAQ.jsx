import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = [{id: 1, title:"How to use" , text:"hi"},
{id: 2, title:"what do we do" , text:"wassup"},
{id: 3, title:"maps" , text:"Facebook"},
{id: 4, title:"AShwin" , text:"Twitter"},
{id: 5, title:"AShwin" , text:"Twitter"},
{id: 6, title:"AShwin" , text:"Twitter"},
{id: 7, title:"AShwin" , text:"Twitter"},
{id: 8, title:"AShwin" , text:"Twitter"}
]
export default function FAQs() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>FAQs</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          These are some common queries that might arise while using our website.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}