// gatsby-ssr.js
import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<ColorModeScript key="chakra-ui-no-flash" />]);
};
