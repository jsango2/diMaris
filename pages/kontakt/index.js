import React from "react";
import Layout from "../../components/layout";
import ContactHero from "../../components/KontaktPage/Hero";
import ContactData from "../../components/KontaktPage/Data";
import DiMaris from "../../components/KontaktPage/DiMaris";
import MLS from "../../components/KontaktPage/MLS";
import { getAllKontakti } from "../../lib/api2";
import Kontakt from "../../components/MLSpage/kontakt";

function index(props) {
  const kontakti = props.kontakti.edges[0].node.kontakti;

  return (
    <Layout>
      <ContactHero />
      <ContactData kontakti={kontakti} />
      <DiMaris />
      <MLS />
      <Kontakt />
    </Layout>
  );
}

export default index;

export async function getStaticProps({ locales }) {
  const kontakti = await getAllKontakti();

  return {
    props: {
      fallback: false,
      kontakti,
    },
  };
}
