import { Box, Flex, Grid, Text, Heading, VStack, HStack } from '@chakra-ui/react';
import Countdown from '../components/Countdown';
import { argentinaMatches } from '../data/matches';

const MONTHS_ES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

function formatShortDate(dateStr) {
  const [, m, d] = dateStr.split('-').map(Number);
  return `${d} ${MONTHS_ES[m - 1].charAt(0).toUpperCase() + MONTHS_ES[m - 1].slice(1)}`;
}

const ARGENTINA_PATH = [
  { phase: 'groups', label: 'GRUPO J · MD1', match: argentinaMatches[0] },
  { phase: 'groups', label: 'GRUPO J · MD2', match: argentinaMatches[1] },
  { phase: 'groups', label: 'GRUPO J · MD3', match: argentinaMatches[2] },
  {
    phase: 'r32', label: '16AVOS DE FINAL',
    match: { date: '2026-07-03', time: '16:00', home: '1º Grupo J', homeFlag: '🏆', away: '2º Grupo H', awayFlag: '🥈', venue: 'Hard Rock Stadium', city: 'Miami' },
  },
  {
    phase: 'r16', label: 'OCTAVOS DE FINAL',
    match: { date: '2026-07-06', time: null, home: 'vs Por confirmar', homeFlag: '❓', away: '', awayFlag: '', venue: 'Sede por confirmar', city: '' },
  },
  {
    phase: 'qf', label: 'CUARTOS DE FINAL',
    match: { date: '2026-07-10', time: null, home: 'vs Por confirmar', homeFlag: '❓', away: '', awayFlag: '', venue: 'Sede por confirmar', city: '' },
  },
  {
    phase: 'sf', label: 'SEMIFINAL',
    match: { date: '2026-07-14', time: null, home: 'vs Por confirmar', homeFlag: '❓', away: '', awayFlag: '', venue: 'Dallas', city: '' },
  },
  {
    phase: 'final', label: 'FINAL',
    match: { date: '2026-07-19', time: null, home: 'vs Por confirmar', homeFlag: '❓', away: '', awayFlag: '', venue: 'MetLife Stadium', city: 'Nueva York' },
  },
];

function PathCard({ item, isKnown }) {
  const m = item.match;
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor={isKnown ? 'blue.300' : 'gray.200'}
      borderLeft={isKnown ? '3px solid' : '1px solid'}
      borderLeftColor={isKnown ? 'blue.500' : 'gray.200'}
      borderRadius="4px"
      p={4}
      minW="200px"
      maxW="220px"
      flexShrink={0}
      opacity={isKnown ? 1 : 0.6}
    >
      <Text fontSize="10px" fontWeight="800" letterSpacing="widest" color="gray.500" mb={2}>
        {item.label}
      </Text>
      <Text fontSize="12px" color="gray.600" mb={2}>
        {formatShortDate(m.date)} {m.time ? `· ${m.time}` : ''}
      </Text>

      {isKnown ? (
        <VStack spacing={1} align="start">
          <HStack>
            <Text fontSize="18px">{m.homeFlag}</Text>
            <Text fontSize="14px" fontWeight="700">{m.home}</Text>
          </HStack>
          <Text fontSize="11px" color="gray.400">vs</Text>
          <HStack>
            <Text fontSize="18px">{m.awayFlag}</Text>
            <Text fontSize="14px" fontWeight="700">{m.away}</Text>
          </HStack>
        </VStack>
      ) : (
        <Text fontSize="13px" fontWeight="600" color="gray.400">
          {m.home}
        </Text>
      )}

      <Text fontSize="11px" color="gray.400" mt={2}>
        {m.venue}{m.city ? `, ${m.city}` : ''}
      </Text>
    </Box>
  );
}

export default function Home() {
  return (
    <Box>
      {/* Hero section */}
      <Box maxW="1200px" mx="auto" px={6} py={10}>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={10} align="center">
          {/* Left: title */}
          <Box>
            <Heading
              as="h1"
              fontSize={{ base: '72px', md: '100px', lg: '120px' }}
              fontWeight="900"
              lineHeight="0.9"
              letterSpacing="-4px"
              color="gray.900"
              mb={4}
            >
              MUNDIAL
              <br />
              2026
            </Heading>
            <VStack spacing={1} align="start" mt={4}>
              <Text fontSize="14px" fontWeight="700" letterSpacing="widest" color="gray.600">
                11 JUN — 19 JUL · ESTADOS UNIDOS · MÉXICO · CANADÁ
              </Text>
              <Text fontSize="13px" color="gray.400">
                104 partidos · 48 selecciones · 16 sedes
              </Text>
            </VStack>
          </Box>

          {/* Right: countdown */}
          <Box>
            <Countdown />
          </Box>
        </Grid>
      </Box>

      {/* Argentina's path */}
      <Box bg="gray.50" borderTop="1px solid" borderColor="gray.200" py={8}>
        <Box maxW="1200px" mx="auto" px={6}>
          <HStack mb={5} spacing={2}>
            <Text fontSize="11px" fontWeight="800" letterSpacing="widest" color="gray.600">
              CAMINO DE ARGENTINA
            </Text>
            <Text fontSize="20px">🇦🇷</Text>
          </HStack>
          <Box overflowX="auto" pb={2}>
            <HStack spacing={3} align="stretch" minW="max-content">
              {ARGENTINA_PATH.map((item, i) => (
                <PathCard key={i} item={item} isKnown={i < 3} />
              ))}
            </HStack>
          </Box>
        </Box>
      </Box>

      {/* Stats bar */}
      <Box bg="gray.900" py={6}>
        <Flex maxW="1200px" mx="auto" px={6} justify="space-around" wrap="wrap" gap={4}>
          {[
            { value: '104', label: 'Partidos' },
            { value: '48', label: 'Selecciones' },
            { value: '12', label: 'Grupos' },
            { value: '16', label: 'Sedes' },
            { value: '39', label: 'Días de fútbol' },
          ].map((stat) => (
            <VStack key={stat.label} spacing={0} align="center">
              <Text fontSize="32px" fontWeight="900" color="white" letterSpacing="-1px">
                {stat.value}
              </Text>
              <Text fontSize="11px" fontWeight="600" letterSpacing="widest" color="gray.400">
                {stat.label.toUpperCase()}
              </Text>
            </VStack>
          ))}
        </Flex>
      </Box>
    </Box>
  );
}
