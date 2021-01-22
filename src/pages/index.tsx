import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import { Layout } from '../components/layout';
import { PinnedRepositories } from '../components/pinnedRepositories';

// eslint-disable-next-line import/no-default-export
export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Box mt={3}>
        <Text
          as="h2"
          fontSize="md"
          color={useColorModeValue('gray.700', 'gray.300')}
          mt={2}
        >
          Pinned repositories
        </Text>
        <PinnedRepositories />
      </Box>
    </Layout>
  );
}
