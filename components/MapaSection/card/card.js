import React from "react";
import { WrapAll, Graphic, Title, Text, BlueLine } from "./style.js";
import Image from "next/image";
import { useRouter } from "next/router";
import en from "../../../locales/en.json";
import hr from "../../../locales/hr.json";

export const Card = ({
  Grafika,
  title,
  text,
  gradient,
  inview,
  titleEng,
  textEng,
}) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  return (
    <WrapAll gradient={gradient} className={inview}>
      <BlueLine />
      <Graphic>
        <Grafika />
      </Graphic>
      <Title>{locale === "hr" ? title : titleEng}</Title>
      <Text>{locale === "hr" ? text : textEng}</Text>
    </WrapAll>
  );
};
