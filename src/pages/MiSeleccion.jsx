import { useState, useMemo } from 'react';
import { Box, Text, VStack, HStack, Badge, Flex, Select } from '@chakra-ui/react';
import { groups } from '../data/groups';
import { matches } from '../data/matches';

const allTeams = groups
  .flatMap((g) => g.teams.map((t) => ({ ...t, group: g.id })))
  .sort((a, b) => a.name.localeCompare(b.name, 'es'));

const DAYS_ES = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MONTHS_ES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

function formatFullDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${DAYS_ES[date.getDay()]} ${d} de ${MONTHS_ES[m - 1]}`;
}

const MATCHDAY_LABELS = { 1: 'FECHA 1', 2: 'FECHA 2', 3: 'FECHA 3' };

export default function MiSeleccion() {
  const [selectedTeam, setSelectedTeam] = useState('Argentina');

  const teamInfo = useMemo(
    () => allTeams.find((t) => t.name === selectedTeam),
    [selectedTeam]
  );

  const groupMatches = useMemo(
    () =>
      matches.filter(
        (m) =>
          m.phase === 'groups' &&
          (m.home === selectedTeam || m.away === selectedTeam)
      ),
    [selectedTeam]
  );

  return (
    <Box maxW="900px" mx="auto" px={6} py={8}>
      {/* Selector */}
      <Box mb={8}>
        <Text fontSize="11px" fontWeight="800" letterSpacing="widest" color="gray.500" mb={2}>
          SELECCIONAR SELECCIÓN
        </Text>
        <Select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          maxW="340px"
          fontWeight="600"
          fontSize="14px"
          borderColor="gray.300"
          borderRadius="4px"
          bg="white"
          _focus={{ borderColor: 'gray.900', boxShadow: 'none' }}
        >
          {allTeams.map((t) => (
            <option key={t.code} value={t.name}>
              {t.flag} {t.name}
            </option>
          ))}
        </Select>
      </Box>

      {/* Header */}
      <HStack mb={8} spacing={3} align="center" flexWrap="wrap">
        <Text fontSize={{ base: '28px', md: '42px' }} fontWeight="900" letterSpacing="-2px" color="gray.900">
          {teamInfo?.flag} {selectedTeam.toUpperCase()}
        </Text>
        {teamInfo && (
          <Badge
            bg="gray.900"
            color="white"
            fontSize="13px"
            fontWeight="700"
            px={3}
            py={1}
            borderRadius="3px"
            letterSpacing="wide"
          >
            GRUPO {teamInfo.group}
          </Badge>
        )}
      </HStack>

      {/* Partidos de grupos */}
      <VStack spacing={4} align="stretch">
        {groupMatches.map((match) => (
          <Box
            key={match.id}
            bg="white"
            border="1px solid"
            borderColor="blue.200"
            borderLeft="4px solid"
            borderLeftColor="blue.500"
            borderRadius="4px"
            p={6}
          >
            <Text fontSize="11px" fontWeight="800" letterSpacing="widest" color="gray.500" mb={2}>
              GRUPO {match.group} · {MATCHDAY_LABELS[match.matchday]}
            </Text>
            <Text fontSize="14px" fontWeight="600" color="gray.700" mb={4}>
              {formatFullDate(match.date)} · {match.time} hs
            </Text>

            <Flex align="center" gap={4} wrap="wrap">
              <HStack spacing={3} flex="1" justify={{ base: 'flex-start', md: 'flex-end' }}>
                <Text fontSize={{ base: '16px', md: '22px' }} fontWeight="800" color="gray.900">
                  {match.home}
                </Text>
                <Text fontSize="30px">{match.homeFlag}</Text>
              </HStack>

              <Text fontSize="14px" fontWeight="700" color="gray.300" minW="30px" textAlign="center">
                VS
              </Text>

              <HStack spacing={3} flex="1">
                <Text fontSize="30px">{match.awayFlag}</Text>
                <Text fontSize={{ base: '16px', md: '22px' }} fontWeight="800" color="gray.900">
                  {match.away}
                </Text>
              </HStack>
            </Flex>

            <Text fontSize="13px" color="gray.400" mt={4}>
              {match.venue}, {match.city}
            </Text>
          </Box>
        ))}
      </VStack>

      {/* Fase eliminatoria */}
      <Box mt={10}>
        <Text fontSize="18px" fontWeight="800" letterSpacing="-0.5px" color="gray.900" mb={4}>
          FASE ELIMINATORIA
        </Text>
        <VStack spacing={3} align="stretch">
          {[
            { label: '16AVOS DE FINAL', date: '1–5 Jul', venue: 'Sede por confirmar' },
            { label: 'OCTAVOS DE FINAL', date: '6–9 Jul', venue: 'Sede por confirmar' },
            { label: 'CUARTOS DE FINAL', date: '10–11 Jul', venue: 'Sede por confirmar' },
            { label: 'SEMIFINAL', date: '14–15 Jul', venue: 'Sede por confirmar' },
            { label: 'FINAL', date: '19 Jul · 21:00', venue: 'MetLife Stadium, Nueva York' },
          ].map((item) => (
            <Box
              key={item.label}
              bg="white"
              border="1px dashed"
              borderColor="gray.200"
              borderRadius="4px"
              px={5}
              py={4}
              opacity={0.7}
            >
              <Flex justify="space-between" align="center" wrap="wrap" gap={2}>
                <Box>
                  <Text fontSize="10px" fontWeight="800" letterSpacing="widest" color="gray.400" mb={1}>
                    {item.label}
                  </Text>
                  <Text fontSize="14px" fontWeight="600" color="gray.500">
                    {item.date} · vs Por confirmar
                  </Text>
                </Box>
                <Text fontSize="12px" color="gray.400">
                  {item.venue}
                </Text>
              </Flex>
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}
