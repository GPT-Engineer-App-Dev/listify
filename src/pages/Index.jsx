import React, { useState } from "react";
import { Box, Heading, Text, VStack, Input, Button, HStack } from "@chakra-ui/react";

const Index = () => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    console.log("New todo:", newTodo);
    setNewTodo("");
  };

  return (
    <Box bg="white" minH="100vh">
      {/* Header */}
      <Box as="header" bg="blue.500" py={4} color="white">
        <Heading as="h1" size="xl" textAlign="center">
          My Todo App
        </Heading>
      </Box>

      {}
      <VStack as="main" spacing={8} p={8}>
        <HStack>
          <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Enter a new todo" />
          <Button onClick={handleAddTodo} colorScheme="blue">
            Add
          </Button>
        </HStack>
      </VStack>

      {/* Footer */}
      <Box as="footer" bg="gray.100" py={4} textAlign="center">
        <Text color="gray.500">Created by GPT Assistant</Text>
      </Box>
    </Box>
  );
};

export default Index;
