import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "./config/config";

function App() {
  const [people, setPeople] = useState([]);
  console.log(people);
  const apiCall = async () => {
    const response = await axios.get(`${config.endpoint}/people`);
    setPeople(response.data.results);
  };
  useEffect(() => {
    apiCall();
  }, []);
  return (
    <>
      <Box textAlign="center">
        <Heading>I'm a Heading</Heading>
      </Box>
      <Box mx="auto" maxW="1200px" mt={8}>
        <SimpleGrid
          spacing={8}
          columns={{ base: 1, md: 3 }}
          justifyItems="center"
        >
          {people.map((person) => (
            <Card
              key={person.name}
              bg="gray.800"
              color="white"
              borderRadius="2xl"
              boxShadow="xl"
              overflow="hidden"
              transition="all 0.3s ease"
              _hover={{ boxShadow: "2xl", transform: "translateY(-4px)" }}
              maxW="300px"
            >
              <CardHeader p={6}>
                <Heading size="md" color="teal.300">
                  {person.name}
                </Heading>
              </CardHeader>
              <CardBody p={6}>
                <Text fontSize="lg" color="gray.300">
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
              <CardFooter p={6} bg="gray.700">
                <Button colorScheme="teal" size="lg" variant="solid">
                  View here
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default App;
