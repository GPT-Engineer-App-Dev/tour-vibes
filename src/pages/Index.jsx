import React from "react";
import { Box, Heading, Text, Image, Container, Stack, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg={useColorModeValue("gray.800", "gray.900")}>
      {/* Header */}
      <Box as="header" py={4} px={8} bg={useColorModeValue("gray.700", "gray.800")}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Heading as="h1" size="xl" color="white">
            [Band Name]
          </Heading>
          <Image src="https://images.unsplash.com/photo-1530290634303-ec5bd373e292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwbG9nb3xlbnwwfHx8fDE3MTMwNTYzMTl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band Logo" boxSize="60px" />
        </Stack>
      </Box>

      {/* Hero Section */}
      <Box position="relative">
        <Image src="https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwcGVyZm9ybWluZyUyMG9uJTIwc3RhZ2V8ZW58MHx8fHwxNzEzMDU2MzE5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band Performing" width="100%" height={["300px", "400px", "500px"]} objectFit="cover" />
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center">
          <Heading as="h2" size="2xl" color="white" mb={4}>
            [Tour Name]
          </Heading>
          <Text fontSize="xl" color="white" mb={8}>
            Check out our upcoming tour dates and get your tickets now!
          </Text>
          <Button leftIcon={<FaTicketAlt />} size="lg" colorScheme="teal" _hover={{ bg: "teal.600" }}>
            Get Tickets
          </Button>
        </Box>
      </Box>

      {/* Upcoming Shows Section */}
      <Container maxW="container.lg" py={12}>
        <Heading as="h3" size="xl" color="white" mb={8}>
          Upcoming Shows
        </Heading>
        {/* Add upcoming shows content */}
      </Container>
    </Box>
  );
};

export default Index;
