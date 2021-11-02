import Container from "../components/Container";
import Head from "next/head";
// import { NextSeo } from "next-seo"; // then add the `NextSeo` at any `pages/` that you wish

const Index = () => {
  return (
    <div>
      {/* <NextSeo title="Next project - Homeeeeeeeeeeee" /> */}
      <Head>
        <title>Gorilla home title</title>
      </Head>
      <Container>
        <h1>Home Screen</h1>
      </Container>
    </div>
  );
};

export default Index;
