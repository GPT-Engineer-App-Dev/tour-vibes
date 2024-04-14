import React from "react";
import { Box, Heading, Text, Stack, useColorModeValue } from "@chakra-ui/react";

const UpcomingShows = () => {
  const upcomingShows = [
    { venue: "The Fillmore", city: "San Francisco, CA", date: "June 15, 2024" },
    { venue: "The Wiltern", city: "Los Angeles, CA", date: "June 18, 2024" },
    { venue: "The Showbox", city: "Seattle, WA", date: "June 22, 2024" },
  ];

  return (
    <Box bg={useColorModeValue("gray.800", "gray.900")} py={12}>
      <Heading as="h3" size="xl" color="white" mb={8} textAlign="center">
        Upcoming Tour Dates
      </Heading>
      <Stack spacing={4} maxW="container.lg" mx="auto">
        {upcomingShows.map((show, index) => (
          <Box key={index} bg={useColorModeValue("gray.700", "gray.800")} p={4} rounded="md">
            <Heading as="h4" size="md" color="white" mb={2}>
              {show.venue}
            </Heading>
            <Text color="gray.400">
              {show.city} | {show.date}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default UpcomingShows;
