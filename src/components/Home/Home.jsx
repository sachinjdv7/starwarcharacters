import React from "react";
import { Box, Center, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../../config/config";
import { Pagination } from "..";
import { CharacterCard } from "..";
import { Loader } from "..";
import { Header } from "..";

function Home() {
  const [peopleData, updatePeopleData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const { count, results } = peopleData;

  const api = `${config.endpoint}/people?page=${pageNumber}`;

  useEffect(() => {
    setLoading(true);
    (async () => {
      await axios
        .get(api)
        .then((response) => updatePeopleData(response.data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    })();
  }, [api]);

  return (
    <>
      <Header />
      {loading ? (
        <Center minH="50vh">
          <Loader />
        </Center>
      ) : (
        <Box mx="auto" maxW="1200px" mt={8}>
          <SimpleGrid spacing={8} columns={{ base: 1, md: 3 }}>
            <CharacterCard results={results} />
          </SimpleGrid>
        </Box>
      )}

      <Pagination count={count} setPageNumber={setPageNumber} />
    </>
  );
}

export default Home;
