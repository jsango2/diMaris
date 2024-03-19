import {
  WrapMLS,
  ContentMLS,
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

function MLSsection() {
  return (
    <WrapMLS>
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
      <ContentMLS>
        <BlueLine />
        <UpTitle>MLS</UpTitle>
        <Title>
          Uz našu logističku podršku možete bolje planirati svoje zalihe{" "}
        </Title>
        <Text>
          Teret prevozimo na međunarodnim i domaćim rutama. Transportiramo i
          skladištimo smrznute i svježe proizvode kojima je potreban poseban
          higijenski i temperaturni režim. Logistiku obavljamo na svim
          temperaturnim režimima od -25°c - +35°c.
        </Text>
        <Button
          bgColor="#4299C8"
          color="#FFFFFF"
          width="238px"
          text="Zatražite ponudu"
          linkTo="/o-nama"
        />
        <PonudaLink style={{ width: "236px" }}>
          Vrste tereta koje prevozimo <ArrowRight />
        </PonudaLink>
      </ContentMLS>
    </WrapMLS>
  );
}

export default MLSsection;
