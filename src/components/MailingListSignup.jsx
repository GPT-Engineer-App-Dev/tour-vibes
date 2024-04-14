import React from "react";
import { Box, Heading, Text, FormControl, Input, Button, useColorModeValue } from "@chakra-ui/react";

const MailingListSignup = () => {
  return (
    <Box bg={useColorModeValue("gray.800", "gray.900")} py={12}>
      <Heading as="h3" size="xl" color="white" mb={8} textAlign="center">
        Join Our Mailing List
      </Heading>
      <Box maxW="container.lg" mx="auto" textAlign="center">
        <Text color="white" fontSize="lg" mb={8}>
          Sign up to receive updates about new music, tours, and merchandise.
        </Text>
        <FormControl id="email" maxW="md" mx="auto">
          <Input type="email" placeholder="Enter your email" bg="white" mb={4} />
          <Button colorScheme="teal" size="lg" width="full">
            Sign Up
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MailingListSignup;
