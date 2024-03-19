import Image from "next/image";
import React from "react";

import { WrapPhotos, Photo1, Photo2, Photo3, Photo4 } from "./style.js";
import p1 from "../../assets/images/mapa/bus.png";
import p2 from "../../assets/images/mapa/viljuskar 2.png";
import p3 from "../../assets/images/mapa/radnik.png";
import p4 from "../../assets/images/mapa/zuti.png";
import { useScrollPercentage } from "react-scroll-percentage";
import { useInView } from "react-intersection-observer";

const Photos = () => {
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  });
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  //   triggerOnce: true,
  // });

  return (
    <WrapPhotos ref={ref}>
      <Photo1 percentage={percentage}>
        <Image src={p1} alt="p1" layout="fill" objectFit="cover" />
      </Photo1>
      <Photo2 percentage={percentage}>
        <Image src={p2} alt="p2" layout="fill" objectFit="cover" />
      </Photo2>
      <Photo3 percentage={percentage}>
        <Image src={p3} alt="p3" layout="fill" objectFit="cover" />
      </Photo3>
      <Photo4 percentage={percentage}>
        <Image src={p4} alt="p4" layout="fill" objectFit="cover" />
      </Photo4>
    </WrapPhotos>
  );
};

export default Photos;
