import { WrapAll, Cards, Block } from "./style.js";
import Mapa from "./mapa.js";
import TextContent from "./textContent.js";
import Photos from "./photos.js";
import { Card } from "./card/card.js";
import Riba from "../../assets/images/riba.svg";
import Kamion from "../../assets/images/kamion.svg";
import Tabla from "../../assets/images/tabla.svg";
import Zarulja from "../../assets/images/zarulja.svg";
import { useInView } from "react-intersection-observer";

function MapaSection() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <WrapAll>
      <Cards ref={ref}>
        <Block>
          <Card
            inview={` ${inView ? "CardSlideUp" : "Card"}`}
            Grafika={Kamion}
            title="VIŠE OD 10.000 ZADOVOLJNIH PROFESIONALACA"
            titleEng="More than 10,000 satisfied professionals."
            text="Zadovoljstvo naših klijenata dokaz je visoke razine naših proizvoda i usluga."
            textEng="The satisfaction of our clients is evidence of the high level of our products and services."
            gradient="1"
          />
          <Card
            inview={` ${inView ? "CardSlideUp" : "Card"}`}
            Grafika={Zarulja}
            title="BRZA LOGISTIČKA RJEŠENJA DILJEM OPSKRBNOG LANCA"
            text="Naša logistička infrastruktura omogućuje da u kratkom roku i s visokom preciznošću riješimo i najzahtjevnije logističke izazove."
            titleEng="Fast logistics solutions throughout the supply chain."
            textEng="Our logistics infrastructure enables us to solve even the most demanding logistical challenges quickly and with high precision."
            gradient="2"
          />
        </Block>
        <Block>
          <Card
            inview={` ${inView ? "CardSlideUp" : "Card"}`}
            Grafika={Tabla}
            title="POSVEĆENOST KVALITETI I INOVACIJAMA"
            text="Stvaramo tržišne trendove, a naši stručnjaci strogo kontroliraju svaku fazu procesa – od ulova do potrošača."
            titleEng="Commitment to Quality and Innovation."
            textEng="We create market trends, and our experts rigorously control every phase of the process - from catch to consumer."
            gradient="1"
          />
          <Card
            inview={` ${inView ? "CardSlideUp" : "Card"}`}
            Grafika={Riba}
            title="VOLIMO ZDRAVU PREHRANU"
            text="Ljubav prema životu i hrani usmjerava nas i motivira da svojim kupcima omogućimo zdrav i nutritivno bogat oblik prehrane."
            titleEng="We love healthy nutrition."
            textEng="The love for life and food guides and motivates us to provide our customers with a healthy and nutritionally rich form of diet."
            gradient="2"
          />
        </Block>
      </Cards>
      <Mapa />
      <TextContent />
      <Photos />
    </WrapAll>
  );
}

export default MapaSection;
