import { Box, Text } from '@chakra-ui/core';
import React from 'react';

import { Layout } from '../components/layout';
import { PinnedRepositories } from '../components/pinnedRepositories';

// eslint-disable-next-line import/no-default-export
export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Box mt={3}>
        <Text as="h2" fontSize="lg" color="gray.700">
          Pinned repositories
        </Text>
        <PinnedRepositories />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          excepturi repellat, iste modi inventore nisi, atque, dignissimos
          nostrum aliquam culpa sit corrupti. Illum, voluptate modi amet
          consectetur molestiae veniam quibusdam numquam delectus velit omnis
          fugiat accusantium voluptatem quisquam eius eos quos voluptas at iure
          consequatur sed corrupti aliquid minus autem perspiciatis. Praesentium
          cum quam, tenetur ex provident iure libero deleniti tempora accusamus
          odio! Aliquid, molestiae quas animi impedit tempore ipsa optio error,
          dicta, officiis temporibus nam commodi in cupiditate fugit inventore
          quia magnam. Molestias non nesciunt fuga, alias eveniet nulla minus
          officia rerum harum, nobis vitae. Molestias incidunt eligendi ab?
        </Text>
      </Box>
    </Layout>
  );
}
