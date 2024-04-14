import React from "react";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const AboutBand = () => {
  return (
    <Box bg={useColorModeValue("gray.800", "gray.900")} py={12}>
      <Heading as="h3" size="xl" color="white" mb={8} textAlign="center">
        About the Band
      </Heading>
      <Box maxW="container.lg" mx="auto">
        <Text color="white" fontSize="lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel bibendum malesuada, urna elit consectetur purus, eget tincidunt nisl nunc eget lorem. Sed euismod tristique nisi, vel bibendum metus ullamcorper id. Proin euismod, nisi vel bibendum malesuada, urna elit consectetur purus, eget tincidunt nisl nunc eget lorem.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutBand;
