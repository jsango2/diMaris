import React from "react";
import { WrapTextContetnt, Title, TitleUp, Text } from "./style.js";
import { useRouter } from "next/router";
import en from "../../locales/en.json";
import hr from "../../locales/hr.json";
import { useInView } from "react-intersection-observer";
const textContent = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <WrapTextContetnt>
      <TitleUp ref={ref} className={` ${inView ? "inView" : "outView"}`}>
        {t.Map.topTitle}
      </TitleUp>
      <Title className={` ${inView ? "inView" : "outView"}`}>
        {t.Map.title}
      </Title>

      <Text dangerouslySetInnerHTML={{ __html: t.Map.text }}></Text>
    </WrapTextContetnt>
  );
};

export default textContent;
