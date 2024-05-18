import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { config } from "../../config/config";
import { Loader } from "..";
import axios from "axios";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";

function CharacterDetailCard() {
  const { id } = useParams();
  const [peopleDetail, updatePeopleDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { name, height, birth_year, hair_color, skin_color, eye_color } =
    peopleDetail;

  const api = `${config.endpoint}/people/${id}`;

  useEffect(() => {
    setLoading(true);
    (async () => {
      await axios
        .get(api)
        .then((response) => updatePeopleDetail(response?.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    })();
  }, [id]);

  // if (!peopleDetail) {
  //   return (
  //     <Center minH="100vh">
  //       <Text>Loading...</Text>
  //     </Center>
  //   );
  // }

  return (
    <Center minH="100vh">
      {loading ? (
        // <Text>Loading...</Text>
        <Loader />
      ) : (
        <Card
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
            <Heading size="md" color="teal.300" className="text-center">
              {name}
            </Heading>
          </CardHeader>
          <CardBody p={6}>
            <Text fontSize="lg" color="gray.300" className="text-center">
              Height : {height} <br />
              Birth Year : {birth_year} <br />
              Hair Color : {hair_color} <br />
              Skin Color : {skin_color} <br />
              Eye Color : {eye_color}
            </Text>
          </CardBody>
        </Card>
      )}
    </Center>
  );
}

export default CharacterDetailCard;
