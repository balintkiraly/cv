import { SimpleGrid } from '@chakra-ui/core';
import React from 'react';

import { Repository } from './repository';

export const PinnedRepositories = (): JSX.Element => (
  <SimpleGrid columns={2} spacing={10} my={3}>
    <Repository
      title="pek-next"
      link="https://github.com/kir-dev/pek-next"
      description="PéK like Profiles and Groups. The administration system for Schönherz Student Hostel and SVIE"
    />
  </SimpleGrid>
);
