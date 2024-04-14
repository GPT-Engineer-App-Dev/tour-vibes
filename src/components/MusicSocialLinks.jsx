import React from "react";
import { Box, Heading, Link, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaSpotify, FaApple, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const MusicSocialLinks = () => {
  return (
    <Box bg={useColorModeValue("gray.800", "gray.900")} py={12}>
      <Heading as="h3" size="xl" color="white" mb={8} textAlign="center">
        Music & Social Media
      </Heading>
      <Stack direction={["column", "row"]} spacing={8} justifyContent="center" maxW="container.lg" mx="auto">
        <Link href="#" isExternal>
          <Box display="flex" alignItems="center">
            <FaSpotify size={24} color="white" mr={2} />
            <Heading as="h4" size="md" color="white">
              Spotify
            </Heading>
          </Box>
        </Link>
        <Link href="#" isExternal>
          <Box display="flex" alignItems="center">
            <FaApple size={24} color="white" mr={2} />
            <Heading as="h4" size="md" color="white">
              Apple Music
            </Heading>
          </Box>
        </Link>
        <Link href="#" isExternal>
          <Box display="flex" alignItems="center">
            <FaFacebook size={24} color="white" mr={2} />
            <Heading as="h4" size="md" color="white">
              Facebook
            </Heading>
          </Box>
        </Link>
        <Link href="#" isExternal>
          <Box display="flex" alignItems="center">
            <FaInstagram size={24} color="white" mr={2} />
            <Heading as="h4" size="md" color="white">
              Instagram
            </Heading>
          </Box>
        </Link>
        <Link href="#" isExternal>
          <Box display="flex" alignItems="center">
            <FaTwitter size={24} color="white" mr={2} />
            <Heading as="h4" size="md" color="white">
              Twitter
            </Heading>
          </Box>
        </Link>
      </Stack>
    </Box>
  );
};

export default MusicSocialLinks;
