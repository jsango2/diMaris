import {
  WrapContent,
  WrapAll,
  Overlay,
  Naslov,
  ButtonLeft,
  ButtonRight,
} from "./style.js";

import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router.js";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import parse from "html-react-parser";
import { useInView } from "react-intersection-observer";
function Instagram() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.2,
  });
  const { locale } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll ref={ref}>
      <Overlay />
      <WrapContent inView={inView}>
        <Naslov>PRATITE NAS NA INSTAGRAMU I FACEBOOKU!</Naslov>
        <ButtonLeft href="https://www.instagram.com/dimaris_croatia/">
          @dimaris_croatia
        </ButtonLeft>
        <ButtonRight href="https://www.facebook.com/dimaris.hr">
          DI MARIS FACEBOOK
        </ButtonRight>
      </WrapContent>
    </WrapAll>
  );
}

export default Instagram;
