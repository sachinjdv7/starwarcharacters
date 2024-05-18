import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CharacterCard({ results }) {
  return (
    <>
      {results?.map((person, index) => (
        <Card
          key={person.name}
          bg="gray.800"
          color="white"
          borderRadius="2xl"
          boxShadow="xl"
          overflow="hidden"
          transition="all 0.3s ease"
          _hover={{ boxShadow: "2xl", transform: "translateY(-4px)" }}
          maxW="90%"
        >
          <CardHeader p={6}>
            <Heading size="md" color="teal.300" className="text-center">
              {person.name}
            </Heading>
          </CardHeader>
          <CardBody p={6} className="text-center">
            <Text fontSize="lg" color="gray.300">
              Gender : {person.gender}
            </Text>
          </CardBody>
          <CardFooter
            p={6}
            bg="gray.700"
            display="flex"
            justifyContent="center"
          >
            <Link to={`/${index + 1}`}>
              <Button colorScheme="teal" size="lg" variant="solid">
                View here
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

export default CharacterCard;
