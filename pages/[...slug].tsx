import React from 'react';
import HomeAnnouncement from "components/home-announcement";
import Head from "next/head";

const CatchAllPage = () => {
  return (
    <>
    <Head>
      <title>Euler Tools</title>
      <meta name="description" content="Euler Tools"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
  <HomeAnnouncement />;
    </>)

};

export default CatchAllPage;

