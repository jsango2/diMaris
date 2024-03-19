import Meta from "../components/meta";
import FooterSection from "./FooterSection";
import Header from "./header";

export default function Layout({
  preview,
  children,
  novostiNaslovi,
  oglasiNaslovi,
}) {
  return (
    <>
      <Header novostiNaslovi={novostiNaslovi} oglasiNaslovi={oglasiNaslovi} />
      <Meta />
      <main>{children}</main>
      <FooterSection />
    </>
  );
}
