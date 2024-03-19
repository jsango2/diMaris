import { WrapKategorija, Photo, Text } from "./style.js";

import useWindowSize from "../../helper/usewindowsize.js";
import Image from "next/image.js";
import parse from "html-react-parser";

import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";
import { useRouter } from "next/router.js";

function Kategorija({ photo, text }) {
  const { locale } = useRouter();

  const t = locale === "en" ? en : hr;
  const size = useWindowSize();
  return (
    <WrapKategorija>
      <Photo photo={photo} />
      <Text>{parse(text)}</Text>
    </WrapKategorija>
  );
}

export default Kategorija;
