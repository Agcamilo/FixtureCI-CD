import { Box, Text } from '@chakra-ui/react';

const TICKER_TEXT =
  'MUNDIAL 2026 · USA · CANADA · MEXICO · 11 JUN — 19 JUL 2026 · 104 PARTIDOS · 48 SELECCIONES · 12 GRUPOS · 16 SEDES · EL PRIMER MUNDIAL CON 48 EQUIPOS · ';

export default function Ticker() {
  return (
    <Box bg="gray.900" overflow="hidden" py="6px">
      <Box className="ticker-content">
        <Text
          as="span"
          color="white"
          fontSize="11px"
          fontWeight="600"
          letterSpacing="widest"
        >
          {TICKER_TEXT.repeat(6)}
        </Text>
      </Box>
    </Box>
  );
}
