import { Box, Grid, Text } from '@chakra-ui/react';
import { groups } from '../data/groups';
import GroupCard from '../components/GroupCard';

export default function Groups() {
  return (
    <Box maxW="1200px" mx="auto" px={6} py={8}>
      <Text fontSize="28px" fontWeight="900" letterSpacing="-1px" color="gray.900" mb={1}>
        FASE DE GRUPOS
      </Text>
      <Text fontSize="13px" color="gray.500" mb={8}>
        48 selecciones en 12 grupos de 4
      </Text>

      <Grid
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={4}
      >
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} />
        ))}
      </Grid>
    </Box>
  );
}
