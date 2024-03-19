import { WrapAll, WrapGreyLogos } from "./style.js";

import MarikomercBig from "../../svg/MarikomercGreyLogoBig.svg";

import MLSbig from "../../svg/MLSGreyLogoBig.svg";

import Image from "next/image";
import Button from "../buttonBlue/Button.js";
import Link from "next/link";
import Karijere from "./karijere.js";
import MLSsection from "./MLS.js";
import Mapa from "./Mapa.js";
import Logos from "./logos.js";
import useWindowSize from "../helper/usewindowsize";

function ProLogMapSection() {
  const size = useWindowSize();
  return (
    <WrapAll>
      <Logos />
      <Karijere />
      {size.width > 750 && (
        <MarikomercBig
          style={{ position: "relative", top: "-60px", left: "-60px" }}
        />
      )}

      <MLSsection />
      {size.width > 750 && (
        <MLSbig
          style={{ position: "relative", top: "-160px", right: "-400px" }}
        />
      )}

      <Mapa />
    </WrapAll>
  );
}

export default ProLogMapSection;
