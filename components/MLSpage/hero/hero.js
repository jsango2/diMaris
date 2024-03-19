import { MLStraka, HeroWrap, WrapMLSlogo } from "./style.js";
// import HeroVideo from "../../video/kraciVideo.mp4";
import useWindowSize from "../../helper/usewindowsize";
import { Link as Veza } from "react-scroll";
import Image from "next/image.js";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0,
  });

  const size = useWindowSize();
  return (
    <>
      <HeroWrap>
        <video autoPlay muted loop="loop" className="videoHero" playsInline>
          <source src="/MarikomercMLSvideoSmanjen.mov" type="video/mp4" />
        </video>
        <MLStraka ref={ref} inView={inView}>
          {/* <WrapMLSlogo> */}
          <Image src="/MLSlogo.svg" layout="fill" />
          {/* </WrapMLSlogo> */}
        </MLStraka>
      </HeroWrap>
      {/* <Companies /> */}
    </>
  );
};

export default Hero;
