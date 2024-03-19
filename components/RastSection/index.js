import {
  WrapAll,
  Overlay,
  WrapBg,
  OverlayTop,
  WrapContent,
  Left,
  BlueLine,
  Title,
  Text,
  Right,
  SingleFact,
  Wrap,
  TextFact,
  Line,
  Number,
} from "./style.js";
import bg from "../../assets/images/certifikat/bg.png";

import Image from "next/image";
function RastSection() {
  return (
    <WrapAll>
      <WrapBg>
        <Image src={bg} alt="Picture 2" layout="fill" objectFit="cover" />
      </WrapBg>
      <Overlay />
      <OverlayTop />
      <WrapContent>
        <Left>
          <BlueLine />
          <Title>ONO ŠTO NUDIMO, U BROJKAMA</Title>
          <Text>
            Rast u količinama, prihodima, kapacitetima, količini isporuka
            obilježio je našu grupu zadnjih godina
          </Text>
        </Left>
        <Right>
          <SingleFact>
            <Wrap>
              <Number>+16%</Number>
              <TextFact>Prosječan rast prihoda u zadnje 3 godine</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>952</Number>
              <TextFact>Broj kupaca u prošloj godini</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>874</Number>
              <TextFact>Skladišni prostor u n° paleta</TextFact>
            </Wrap>
            <Line />
          </SingleFact>
          <SingleFact>
            <Wrap>
              <Number>1.608 t</Number>
              <TextFact>Ukupne količine u 2021. godini </TextFact>
            </Wrap>
          </SingleFact>
        </Right>
      </WrapContent>
    </WrapAll>
  );
}

export default RastSection;
