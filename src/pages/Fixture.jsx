import { useState, useMemo } from 'react';
import {
  Box, Flex, Text, Input, Select, VStack, HStack, Badge, Divider
} from '@chakra-ui/react';
import { matches, PHASE_LABELS } from '../data/matches';
import MatchCard from '../components/MatchCard';

const PHASES = [
  { value: 'all', label: 'TODAS LAS FASES' },
  { value: 'groups', label: 'FASE DE GRUPOS' },
  { value: 'r32', label: '16AVOS DE FINAL' },
  { value: 'r16', label: 'OCTAVOS DE FINAL' },
  { value: 'qf', label: 'CUARTOS DE FINAL' },
  { value: 'sf', label: 'SEMIFINAL' },
  { value: '3rd', label: 'TERCER PUESTO' },
  { value: 'final', label: 'FINAL' },
];

const GROUPS = [
  { value: 'all', label: 'TODOS LOS GRUPOS' },
  ...'ABCDEFGHIJKL'.split('').map((g) => ({ value: g, label: `GRUPO ${g}` })),
];

export default function Fixture() {
  const [search, setSearch] = useState('');
  const [phase, setPhase] = useState('all');
  const [group, setGroup] = useState('all');

  const filtered = useMemo(() => {
    return matches.filter((m) => {
      if (phase !== 'all' && m.phase !== phase) return false;
      if (group !== 'all' && m.group !== group) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          m.home?.toLowerCase().includes(q) ||
          m.away?.toLowerCase().includes(q) ||
          m.city?.toLowerCase().includes(q) ||
          m.venue?.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, phase, group]);

  // Group matches by phase for display
  const byPhase = useMemo(() => {
    const map = new Map();
    for (const m of filtered) {
      if (!map.has(m.phase)) map.set(m.phase, []);
      map.get(m.phase).push(m);
    }
    const phaseOrder = ['groups', 'r32', 'r16', 'qf', 'sf', '3rd', 'final'];
    return phaseOrder.filter((p) => map.has(p)).map((p) => ({ phase: p, items: map.get(p) }));
  }, [filtered]);

  return (
    <Box maxW="1200px" mx="auto" px={6} py={8}>
      {/* Filters */}
      <VStack spacing={4} align="stretch" mb={6}>
        <Input
          placeholder="Buscar equipo, sede, ciudad..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          bg="white"
          border="1px solid"
          borderColor="gray.300"
          fontSize="14px"
          h="44px"
          _placeholder={{ color: 'gray.400' }}
          _focus={{ borderColor: 'gray.500', boxShadow: 'none' }}
        />

        <HStack spacing={3} wrap="wrap">
          <Select
            value={phase}
            onChange={(e) => { setPhase(e.target.value); setGroup('all'); }}
            bg="white"
            border="1px solid"
            borderColor="gray.300"
            fontSize="13px"
            fontWeight="600"
            h="40px"
            maxW="220px"
            _focus={{ borderColor: 'gray.500', boxShadow: 'none' }}
          >
            {PHASES.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </Select>

          {(phase === 'all' || phase === 'groups') && (
            <Select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              bg="white"
              border="1px solid"
              borderColor="gray.300"
              fontSize="13px"
              fontWeight="600"
              h="40px"
              maxW="220px"
              _focus={{ borderColor: 'gray.500', boxShadow: 'none' }}
            >
              {GROUPS.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </Select>
          )}

          <Text fontSize="12px" fontWeight="700" letterSpacing="widest" color="gray.500" alignSelf="center">
            {filtered.length} PARTIDOS
          </Text>
        </HStack>
      </VStack>

      {/* Matches list grouped by phase */}
      <VStack spacing={8} align="stretch">
        {byPhase.length === 0 && (
          <Text color="gray.400" textAlign="center" py={12} fontSize="15px">
            No se encontraron partidos.
          </Text>
        )}

        {byPhase.map(({ phase: p, items }) => (
          <Box key={p}>
            <Text
              fontSize="22px"
              fontWeight="900"
              letterSpacing="-0.5px"
              color="gray.900"
              mb={4}
            >
              {PHASE_LABELS[p]}
            </Text>
            <VStack spacing={2} align="stretch">
              {items.map((m) => (
                <Flex key={m.id} align="center" gap={3}>
                  <Text
                    fontSize="12px"
                    fontWeight="700"
                    color="gray.300"
                    minW="28px"
                    textAlign="right"
                  >
                    #{m.id}
                  </Text>
                  <Box flex="1">
                    <MatchCard
                      match={m}
                      isArgentina={m.home === 'Argentina' || m.away === 'Argentina'}
                    />
                  </Box>
                </Flex>
              ))}
            </VStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
