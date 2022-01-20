import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: false,
  fonts: {
    heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  } ,

});

export default theme;
