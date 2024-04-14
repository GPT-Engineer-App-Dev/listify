import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="white" minH="100vh">
      {/* Header */}
      <Box as="header" bg="blue.500" py={4} color="white">
        <Heading as="h1" size="xl" textAlign="center">
          My Todo App
        </Heading>
      </Box>

      {/* Main Content */}
      <VStack as="main" spacing={8} p={8}>
        {/* TODO: Add todo functionality */}
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="gray.100" py={4} textAlign="center">
        <Text color="gray.500">Created by GPT Assistant</Text>
      </Box>
    </Box>
  );
};

export default Index;
