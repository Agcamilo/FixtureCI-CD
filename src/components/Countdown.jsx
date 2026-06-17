import { useEffect, useState } from 'react';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';
import { getNextArgentinaMatch } from '../data/matches';

function pad(n) {
  return String(n).padStart(2, '0');
}

function getTimeLeft(targetDate) {
  const diff = targetDate - new Date();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function Countdown() {
  const nextMatch = getNextArgentinaMatch();
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    if (!nextMatch) return;
    const target = new Date(`${nextMatch.date}T${nextMatch.time}:00-03:00`);

    const update = () => setTimeLeft(getTimeLeft(target));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [nextMatch]);

  if (!nextMatch) {
    return (
      <Box textAlign="center" py={8}>
        <Text fontSize="xl" color="gray.500">
          No hay más partidos de Argentina programados.
        </Text>
      </Box>
    );
  }

  const units = [
    { label: 'DIAS', value: timeLeft ? pad(timeLeft.days) : '--' },
    { label: 'HS', value: timeLeft ? pad(timeLeft.hours) : '--' },
    { label: 'MIN', value: timeLeft ? pad(timeLeft.minutes) : '--' },
    { label: 'SEG', value: timeLeft ? pad(timeLeft.seconds) : '--' },
  ];

  return (
    <VStack spacing={3} align="center">
      <Text fontSize="13px" fontWeight="600" letterSpacing="widest" color="gray.500">
        FALTAN
      </Text>

      <Flex align="flex-end" gap={{ base: 1, md: 2 }}>
        {units.map((u, i) => (
          <Flex key={u.label} align="flex-end" gap={{ base: 1, md: 2 }}>
            <VStack spacing={0} align="center">
              <Text
                fontSize={{ base: '52px', md: '80px', lg: '100px' }}
                fontWeight="900"
                lineHeight="1"
                color="gray.900"
                letterSpacing="-4px"
                fontFamily="mono"
              >
                {u.value}
              </Text>
              <Text fontSize="11px" fontWeight="600" letterSpacing="widest" color="gray.500" mt={1}>
                {u.label}
              </Text>
            </VStack>
            {i < units.length - 1 && (
              <Text
                fontSize={{ base: '40px', md: '70px', lg: '90px' }}
                fontWeight="900"
                color="gray.900"
                lineHeight="1"
                pb="20px"
                opacity={0.5}
              >
                :
              </Text>
            )}
          </Flex>
        ))}
      </Flex>

      <Text fontSize="14px" fontWeight="700" letterSpacing="widest" color="gray.700" mt={1}>
        {nextMatch.homeFlag} {nextMatch.home.toUpperCase()} VS {nextMatch.away.toUpperCase()} {nextMatch.awayFlag}
      </Text>
    </VStack>
  );
}
