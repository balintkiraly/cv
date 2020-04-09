import { Flex, FlexProps } from '@chakra-ui/core';
import React, { FC } from 'react';

type ContainerProps = FlexProps & {
  children: React.ReactNode;
};

export const Container: FC<ContainerProps> = ({
  children,
  ...rest
}: ContainerProps) => (
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
