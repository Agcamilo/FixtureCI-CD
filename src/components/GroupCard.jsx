import { Box, Text, VStack, HStack, Divider } from '@chakra-ui/react';

export default function GroupCard({ group }) {
  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="4px"
      p={5}
    >
      <Text fontSize="13px" fontWeight="800" letterSpacing="widest" color="gray.900" mb={4}>
        GRUPO {group.id}
      </Text>
      <VStack spacing={3} align="stretch">
        {group.teams.map((team, i) => (
          <Box key={team.code}>
            <HStack spacing={3}>
              <Text fontSize="22px">{team.flag}</Text>
              <Text fontSize="15px" fontWeight="600" color="gray.800">
                {team.name}
              </Text>
            </HStack>
            {i < group.teams.length - 1 && <Divider mt={3} borderColor="gray.100" />}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}
