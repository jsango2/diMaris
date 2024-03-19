import React from "react";
import FooterSection from "../../components/FooterSection";
import KontaktSection from "../../components/KontaktSection";
import Layout from "../../components/layout";
// import Brojke from "../../components/nasaPricaPage/brojke/brojke";
import Hero from "../../components/nasaPricaPage/hero/hero";
import Onama from "../../components/nasaPricaPage/oNama/oNama";
import Povijest from "../../components/nasaPricaPage/povijest/povijest";
import Skladiste from "../../components/nasaPricaPage/skladiste/skladiste";
import Vrijednosti from "../../components/nasaPricaPage/vrijednost/vrijednosti";
import Zajednica from "../../components/nasaPricaPage/zajednica/zajednica";
import NovostiSection from "../../components/NovostiSection";
import Brojke from "../../components/MLSpage/brojke/brojke";

function index() {
  return (
    <Layout>
      <Hero />
      <Onama />
      <Povijest />
      <Vrijednosti />
      <Skladiste />
      <Brojke />
      <Zajednica />
      {/* <NovostiSection background={true} /> */}
      <KontaktSection />
      {/* <FooterSection /> */}
    </Layout>
  );
}

export default index;
