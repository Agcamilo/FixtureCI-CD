import { Box, Flex, Text, Badge } from '@chakra-ui/react';
import { PHASE_LABELS } from '../data/matches';

const DAYS_ES = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const MONTHS_ES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${DAYS_ES[date.getDay()]} ${d} ${MONTHS_ES[m - 1]}`;
}

export default function MatchCard({ match, isArgentina = false }) {
  const isGroupPhase = match.phase === 'groups';

  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor={isArgentina ? 'blue.300' : 'gray.200'}
      borderLeft={isArgentina ? '4px solid' : '1px solid'}
      borderLeftColor={isArgentina ? 'blue.500' : 'gray.200'}
      borderRadius="4px"
      px={5}
      py={4}
    >
      <Flex align="center" justify="space-between" wrap="wrap" gap={3}>
        {/* Match info left */}
        <Flex align="center" gap={4} flex="1" minW="0">
          {/* Date & time block */}
          <Box minW="90px">
            <Text fontSize="13px" fontWeight="600" color="gray.900">
              {formatDate(match.date)}
            </Text>
            <Text fontSize="11px" color="gray.500" letterSpacing="wide" fontWeight="500">
              {match.time} hs
            </Text>
          </Box>

          {/* Teams */}
          <Flex align="center" gap={3} flex="1" minW={0}>
            <Flex align="center" gap={2} flex="1" justify="flex-end">
              <Text fontSize={{ base: '14px', md: '16px' }} fontWeight="700" color="gray.900" noOfLines={1}>
                {match.home}
              </Text>
              <Text fontSize="20px">{match.homeFlag}</Text>
            </Flex>

            <Text fontSize="12px" fontWeight="700" color="gray.400" px={2}>
              VS
            </Text>

            <Flex align="center" gap={2} flex="1">
              <Text fontSize="20px">{match.awayFlag}</Text>
              <Text fontSize={{ base: '14px', md: '16px' }} fontWeight="700" color="gray.900" noOfLines={1}>
                {match.away}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        {/* Right side: venue + group */}
        <Flex direction="column" align="flex-end" minW="140px" gap={1}>
          <Text fontSize="12px" color="gray.500" textAlign="right" noOfLines={1}>
            {match.venue}
          </Text>
          <Text fontSize="11px" color="gray.400" textAlign="right">
            {match.city}
          </Text>
          {isGroupPhase && (
            <Badge
              bg="gray.900"
              color="white"
              fontSize="10px"
              fontWeight="700"
              letterSpacing="wide"
              px={2}
              py={0.5}
              borderRadius="2px"
              mt={1}
            >
              GRUPO {match.group}
            </Badge>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
