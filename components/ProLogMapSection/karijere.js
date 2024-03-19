import {
  WrapKarijere,
  Content,
  Photos,
  WrapPhoto,
  UpTitle,
  Text,
  Title,
  PonudaLink,
  BlueLine,
} from "./style.js";
import p1 from "../../assets/images/ProMls/p1.png";
import p2 from "../../assets/images/ProMls/p2.png";
import p3 from "../../assets/images/ProMls/p3.png";
import ArrowRight from "../../svg/arrowRight.svg";

import Image from "next/image";
import Button from "../buttonBlue/Button.js";
import Link from "next/link";

function Karijere() {
  return (
    <WrapKarijere>
      <Content>
        <BlueLine />
        <UpTitle>KARIJERE</UpTitle>
        <Title>Više od 150 profesionalaca u službi izvrsnosti</Title>
        <Text>
          Ponuda najboljeg proizvoda i pružanje najbolje usluge zahtijevaju
          obučene stručnjake. Rano ustajanje, rukovanje hranom na temperaturima
          ispod nule, rad s modernom tehnologijom dio su naše rutine.
          <br />
          <br />
          Pred nama su veliki planovi i konstantno imamo potrebu za novim
          članovima tima na svim razinama. Proces selekcije stalna je aktivnost,
          usmjerena na prepoznavanje mladih ljudi koji imaju sposobnost i želju
          uklopiti se u naše okruženje. Odabir uključuje proces evaluacije čiji
          je cilj utvrđivanje stvarne prisutnosti profesionalnih karakteristika
          i vještina te razvojnog potencijala.
        </Text>
        <Button
          bgColor="#4299C8"
          color="#FFFFFF"
          width="298px"
          text="Karijera u Marikomerc grupi"
          linkTo="/o-nama"
        />
        <PonudaLink>
          Trenutna ponuda poslova <ArrowRight />
        </PonudaLink>
      </Content>
      <Photos>
        <WrapPhoto>
          <Image src={p1} alt="p1" layout="fill" objectFit="cover" />
        </WrapPhoto>
        <WrapPhoto style={{ top: "70px" }}>
          <Image src={p2} alt="p2" layout="fill" objectFit="cover" />
        </WrapPhoto>
        <WrapPhoto style={{ top: "-30px" }}>
          <Image src={p3} alt="p3" layout="fill" objectFit="cover" />
        </WrapPhoto>
      </Photos>
    </WrapKarijere>
  );
}

export default Karijere;
