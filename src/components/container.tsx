import { Flex, FlexProps } from '@chakra-ui/core';
import React, { FC } from 'react';

export const Container: FC<FlexProps> = ({ children, ...rest }) => {
  return (
    <Flex
      flexDirection="column"
      px={4}
      py={6}
      mx="auto"
      maxWidth="1300px"
      {...rest}
    >
      {children}
    </Flex>
  );
};
