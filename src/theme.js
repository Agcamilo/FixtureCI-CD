import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f0ece4',
        color: '#1a1a2e',
      },
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`,
  },
  colors: {
    navy: {
      900: '#0d1117',
      800: '#1a1a2e',
      700: '#16213e',
    },
    gold: {
      400: '#f6c90e',
      500: '#e6b800',
    },
    cream: {
      50: '#faf8f3',
      100: '#f0ece4',
      200: '#e8e2d8',
    },
  },
  components: {
    Button: {
      defaultProps: { colorScheme: 'blackAlpha' },
    },
  },
});

export default theme;
