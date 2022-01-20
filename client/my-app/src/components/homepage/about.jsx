import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  color,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiMessageAltCheck, BiRightArrowAlt } from 'react-icons/bi';
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

function About() {
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
      title: 'What are Shipwrecks?',
      text: "A shipwreck is the wreckage of a ship that is located either beached on land or sunken to the bottom of a body of water. Shipwrecking may be intentional or unintentional.",
      image:
        'https://ae01.alicdn.com/kf/HTB1siM9MrvpK1RjSZPiq6zmwXXaJ/Vinyl-Photography-Background-Light-Yellow-Flower-Illustration-Floral-Children-Fotografia-Backgrounds-for-Photo-Studio-G-177.jpg_Q90.jpg_.webp',
      },
    {
      title: 'Why are we talking about Shipwrecks?',
      text: "Shipwreck sites are treasure troves for the right people. We want to help them by mapping shipwreck locations around the world and whats even better is that even you can add wreck locations yourself to our database!",
      image:
        'https://ae01.alicdn.com/kf/HTB1siM9MrvpK1RjSZPiq6zmwXXaJ/Vinyl-Photography-Background-Light-Yellow-Flower-Illustration-Floral-Children-Fotografia-Backgrounds-for-Photo-Studio-G-177.jpg_Q90.jpg_.webp',
    },
    {
      title: 'Sign In today and lets dive right into it!',
      text: "",
      image:
        'https://ae01.alicdn.com/kf/HTB1siM9MrvpK1RjSZPiq6zmwXXaJ/Vinyl-Photography-Background-Light-Yellow-Flower-Illustration-Floral-Children-Fotografia-Backgrounds-for-Photo-Studio-G-177.jpg_Q90.jpg_.webp',
    },
  ];

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}
    >
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
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={slider => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default About;
