import React from "react";
import Layout from "../components/layout";
import Hero from "../components/diMarisPage/hero/hero";
import Content1 from "../components/diMarisPage/content1/content1";
import Instagram from "../components/diMarisPage/instagram/instagram";
import Lokacije from "../components/diMarisPage/lokacije/lokacije";
import Content2 from "../components/diMarisPage/content1/content2";

function index() {
  return (
    <Layout>
      <Hero />
      <Content1 />
      <Content2 />
      <Instagram />
      <Lokacije />
    </Layout>
  );
}

export default index;

// export async function getStaticProps({ locales }) {
//   const kontakti = await getAllKontakti();

//   return {
//     props: {
//       fallback: false,
//       kontakti,
//     },
//   };
// }
