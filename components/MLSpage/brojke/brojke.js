import { Overlay, WrapAll, Container, OverlayTop, Number } from "./style.js";

import Image from "next/image";
import bg from "../../../assets/images/nasaPrica/brojkeBG.png";
import {
  Line,
  Right,
  SingleFact,
  TextFact,
  Wrap,
} from "../../RastSection/style.js";
import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

function Brojke() {
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll>
      {/* <OverlayTop /> */}
      <Overlay />
      <Image src={bg} alt="p1" layout="fill" objectFit="cover" />
      <Container>
        <Right>
          <SingleFact>
            <Wrap>
              <Number>10.000</Number>
              <TextFact>{t.MLS.numberFact1}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>200</Number>
              <TextFact>{t.MLS.numberFact2}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>5000</Number>
              <TextFact>{t.MLS.numberFact3}</TextFact>
            </Wrap>
          </SingleFact>
        </Right>
        <Right>
          <SingleFact>
            <Wrap>
              <Number>500</Number>
              <TextFact>{t.MLS.numberFact4}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>45000</Number>
              <TextFact>{t.MLS.numberFact5}</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>1500</Number>
              <TextFact>{t.MLS.numberFact6}</TextFact>
            </Wrap>
          </SingleFact>
        </Right>
      </Container>
    </WrapAll>
  );
}

export default Brojke;
