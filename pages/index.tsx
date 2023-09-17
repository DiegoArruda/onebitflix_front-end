import HeaderNoAuth from "@/src/components/homeNoAuth/HeaderNoAuth";
import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";

const HomeNotAuth = () => {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta
          name="description"
          content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."
        />
      </Head>
      <main>
        <HeaderNoAuth />
      </main>
    </>
  );
};

export default HomeNotAuth;
