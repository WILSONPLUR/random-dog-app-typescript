import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import ImageLoader from "../imageLoader";
import styles from "../styles/Home.module.css";
import { Dog } from "../types";
import { Button, ChakraProvider, Container, Heading } from "@chakra-ui/react";

const Home = ({ dog }: { dog: Dog }) => {
  const newImage = () => {
    location.reload();
  };
  return (
    <ChakraProvider>
      <Head>
        <title>Dog images</title>
      </Head>
      <Container
        maxW="container.xl"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br />
        <Heading textAlign="center">Dog's image: </Heading>
        <br />
        <Image
          unoptimized
          loader={ImageLoader}
          src={dog.message}
          width="900px"
          height="800px"
        />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button
            style={{ marginTop: "30px" }}
            margin="0 auto"
            textAlign="center"
            onClick={newImage}
            colorScheme="facebook"
          >
            New dog
          </Button>
          <Button
            style={{ marginTop: "30px", marginLeft: "20px" }}
            margin="0 auto"
            textAlign="center"
            colorScheme="green"
          >
            <a rel="noreferrer" target="_blank" href={dog.message} download>
              Download
            </a>
          </Button>
        </div>
      </Container>
    </ChakraProvider>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return {
    props: {
      dog: data,
    },
  };
}

export default Home;
