import { WrapGreyLogos, WrapLogo } from "./style.js";
import Marikomerc from "../../svg/MarikomercGreyLogo.svg";
import DiMaris from "../../svg/DiMarisGreyLogo.svg";
import DeliMaris from "../../svg/DeliMarisGreyLogo.svg";
import MLS from "../../svg/MLSGreyLogo.svg";
import Perla from "../../svg/PerlaGreyLogo.svg";
import Image from "next/image";

function Logos() {
  return (
    <WrapGreyLogos>
      <WrapLogo>
        <Image src="/MarikomercGreyLogo.svg" alt="p1" layout="fill" />
      </WrapLogo>
      <WrapLogo>
        {" "}
        <Image src="/DiMarisGreyLogo.svg" alt="p1" layout="fill" />
      </WrapLogo>

      <WrapLogo>
        <Image src="/DeliMarisGreyLogo.svg" alt="p1" layout="fill" />
      </WrapLogo>

      <WrapLogo>
        {" "}
        <Image src="/MLSGreyLogo.svg" alt="p1" layout="fill" />
      </WrapLogo>

      <WrapLogo>
        {" "}
        <Image src="/PerlaGreyLogo.svg" alt="p1" layout="fill" />
      </WrapLogo>
    </WrapGreyLogos>
  );
}

export default Logos;
