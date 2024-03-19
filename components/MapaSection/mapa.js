import Image from "next/image";
import {
  WrapAll,
  WrapMap,
  Peru,
  Nizozemska,
  Location,
  LocationNZ,
  LocationEKV,
  LocationPER,
  Falkland,
  Argentina,
  Poljska,
  Esp,
  Vietnam,
  Norveska,
  NZ,
  JAR,
  HR,
  USA,
  SCO,
  JAP,
  TUR,
  GR,
  NAM,
  EKV,
} from "./style.js";
import map from "../../assets/images/mapa.png";
// import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Mapa() {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  // const [location, setLocation] = useState("");
  // const [nizozemska, setNizozemska] = useState("");
  // const [peru, setPeru] = useState("");
  // const [falkland, setFalkland] = useState("");
  // const [argentina, setArgentina] = useState("");
  // const [poljska, setPoljska] = useState("");
  // const [esp, setEsp] = useState("");
  // const [vietnam, setVietnam] = useState("");
  // const [norveska, setNorveska] = useState("");
  // const [nz, setNz] = useState("");
  // const [jar, setJar] = useState("");
  // const [hr, setHr] = useState("");
  // const [usa, setUsa] = useState("");
  // const [sco, setSco] = useState("");
  // const [jap, setJap] = useState("");
  // const [tur, setTur] = useState("");
  // const [gr, setGr] = useState("");
  // const [nam, setNam] = useState("");
  // const [ekv, setEkv] = useState("");
  // const [isHovering, setIsHovering] = useState(false);

  // const handleNizozemska = (loc) => {
  //   setNizozemska("Nizozemska");
  //   // setIsHovering(true);
  // };
  // const handlePeru = (loc) => {
  //   setPeru("Peru");
  //   // setIsHovering(true);
  // };
  // const handleFalkland = (loc) => {
  //   setFalkland("Falkland");
  //   // setIsHovering(true);
  // };
  // const handleArgentina = (loc) => {
  //   setArgentina("Argentina");
  //   // setIsHovering(true);
  // };
  // const handlePoljska = (loc) => {
  //   setPoljska("Poljska");
  //   // setIsHovering(true);
  // };
  // const handleEsp = (loc) => {
  //   setEsp("Esp");
  //   // setIsHovering(true);
  // };
  // const handleVietnam = (loc) => {
  //   setVietnam("Vietnam");
  //   // setIsHovering(true);
  // };
  // const handleNorveska = (loc) => {
  //   setNorveska("Norveska");
  //   // setIsHovering(true);
  // };
  // const handleNZ = (loc) => {
  //   setNz("NZ");
  //   // setIsHovering(true);
  // };
  // const handleJAR = (loc) => {
  //   setJar("JAR");
  //   // setIsHovering(true);
  // };
  // const handleHR = (loc) => {
  //   setHr("HR");
  //   // setIsHovering(true);
  // };
  // const handleUSA = (loc) => {
  //   setUsa("USA");
  //   // setIsHovering(true);
  // };
  // const handleSCO = (loc) => {
  //   setSco("SCO");
  //   // setIsHovering(true);
  // };
  // const handleJap = (loc) => {
  //   setJap("JAP");
  //   // setIsHovering(true);
  // };
  // const handleTur = (loc) => {
  //   setTur("Tur");
  //   // setIsHovering(true);
  // };
  // const handleGr = (loc) => {
  //   setGr("Gr");
  //   // setIsHovering(true);
  // };
  // const handleNam = (loc) => {
  //   setNam("Nam");
  //   // setIsHovering(true);
  // };
  // const handleEkv = (loc) => {
  //   setEkv("Ekv");
  //   // setIsHovering(true);
  // };
  // const handleMouseOut = () => {
  //   setNizozemska("");
  //   setPeru("");
  //   setFalkland("");
  //   setArgentina("");
  //   setPoljska("");
  //   setEsp("");
  //   setVietnam("");
  //   setNorveska("");
  //   setNz("");
  //   setJar("");
  //   setHr("");
  //   setUsa("");
  //   setSco("");
  //   setJap("");
  //   setTur("");
  //   setGr("");
  //   setNam("");
  //   setEkv("");
  // };
  return (
    <WrapMap ref={ref}>
      <Image src={map} alt="map" layout="fill" objectFit="cover" />
      <Nizozemska
        className={` ${inView ? "inView" : "outView"}`}
        // onMouseOver={() => handleNizozemska("Nizozemska")}
        // onMouseOut={handleMouseOut}
        // className={` noCircle ${nizozemska !== "" ? " circle" : ""}`}
      >
        {/* <Location
          className={`location ${nizozemska !== "" ? "showLocation" : ""}`}
        >
          Sipa
        </Location> */}
      </Nizozemska>
      <Peru
        className={` ${inView ? "inView" : "outView"}`}
        // mark={peru}
        // onMouseOver={() => handlePeru("Peru")}
        // onMouseOut={handleMouseOut}
        // className={` noCircle ${peru !== "" ? " circle" : ""}`}
        // zindex={peru}
      >
        {/* <LocationPER
          className={`location ${peru !== "" ? "showLocation " : ""}`}
        >
          Humboldtova lignja
        </LocationPER> */}
      </Peru>
      <Falkland
        className={` ${inView ? "inView" : "outView"}`}
        // onMouseOver={() => handleFalkland("Peru")}
        // onMouseOut={handleMouseOut}
        // className={` noCircle ${falkland !== "" ? " circle" : ""}`}
      >
        {/* <Location
          className={`location ${falkland !== "" ? "showLocation" : ""}`}
        >
          Patagonska lignja
        </Location> */}
      </Falkland>
      <Argentina
        className={` ${inView ? "inView" : "outView"}`}
        // onMouseOver={() => handleArgentina("Peru")}
        // onMouseOut={handleMouseOut}
        // className={` noCircle ${argentina !== "" ? " circle" : ""}`}
      >
        {/* <Location
          className={`location ${argentina !== "" ? "showLocation" : ""}`}
        >
          Gamber ARgentina
        </Location> */}
      </Argentina>
      <Poljska
        className={` ${inView ? "inView" : "outView"}`}
        // onMouseOver={() => handlePoljska("Peru")}
        // onMouseOut={handleMouseOut}
        // className={` noCircle ${poljska !== "" ? " circle" : ""}`}
      >
        {/* <Location
          className={`location ${poljska !== "" ? "showLocation" : ""}`}
        >
          McCain paleta proizvoda
        </Location> */}
      </Poljska>
      <Esp
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${esp !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleEsp("Esp")}
        // onMouseOut={handleMouseOut}
      >
        {/* <Location className={`location ${esp !== "" ? "showLocation" : ""}`}>
          Tuna filet
        </Location> */}
      </Esp>
      <Vietnam
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${vietnam !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleVietnam("Vietnam")}
        // onMouseOut={handleMouseOut}
      >
        {/* <Location
          className={`location ${vietnam !== "" ? "showLocation" : ""}`}
        >
          Vongole
        </Location> */}
      </Vietnam>
      <Norveska
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${norveska !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleNorveska("Norveska")}
        // onMouseOut={handleMouseOut}
      >
        {/* <Location
          className={`location ${norveska !== "" ? "showLocation" : ""}`}
        >
          Losos dimljeni
        </Location> */}
      </Norveska>
      <NZ
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${nz !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleNZ("NZ")}
        // onMouseOut={handleMouseOut}
      >
        {/* <LocationNZ className={`location ${nz !== "" ? "showLocation" : ""}`}>
          Lignjun Novi Zeland
        </LocationNZ> */}
      </NZ>
      <JAR
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${jar !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleJAR("JAR")}
        // onMouseOut={handleMouseOut}
      >
        {/* <Location className={`location ${jar !== "" ? "showLocation" : ""}`}>
          Lignja JAR
        </Location> */}
      </JAR>
      <HR
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${hr !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleHR("HR")}
        // onMouseOut={handleMouseOut}
      >
        {/* <Location className={`location ${hr !== "" ? "showLocation" : ""}`}>
          Meso jadranskih kozica
        </Location> */}
      </HR>
      <USA
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${usa !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleUSA("HR")}
        // onMouseOut={handleMouseOut}
      >
        {/* <Location className={`location ${usa !== "" ? "showLocation" : ""}`}>
          Lignjun
        </Location> */}
      </USA>
      <SCO
        className={` ${inView ? "inView" : "outView"}`}

        // className={` noCircle ${sco !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleSCO("SCO")}
        // onMouseOut={handleMouseOut}
      >
        {/* <Location className={`location ${sco !== "" ? "showLocation" : ""}`}>
          Jakobove kapice
        </Location> */}
      </SCO>
      <JAP
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${jap !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleJap("JAP")}
        // onMouseOut={handleMouseOut}
      >
        {/* <Location className={`location ${jap !== "" ? "showLocation" : ""}`}>
          Umak od soje
        </Location> */}
      </JAP>
      <TUR
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${tur !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleTur("TUR")}
        // onMouseOut={handleMouseOut}
      >
        {/* <Location className={`location ${tur !== "" ? "showLocation" : ""}`}>
          Gavun
        </Location> */}
      </TUR>{" "}
      <GR
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${gr !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleGr("gr")}
        // onMouseOut={handleMouseOut}
        // zindex={gr}
      >
        {/* <Location className={`location ${gr !== "" ? "showLocation" : ""}`}>
          Mediteranska kozica
        </Location> */}
      </GR>
      <NAM
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${nam !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleNam("nam")}
        // onMouseOut={handleMouseOut}
      >
        {/* <Location className={`location ${nam !== "" ? "showLocation" : ""}`}>
          Rep grdobine
        </Location> */}
      </NAM>
      <EKV
        className={` ${inView ? "inView" : "outView"}`}
        // className={` noCircle ${ekv !== "" ? " circle" : ""}`}
        // onMouseOver={() => handleEkv("ekv")}
        // onMouseOut={handleMouseOut}
      >
        {/* <LocationEKV className={`location ${ekv !== "" ? "showLocation" : ""}`}>
          Gamberi
        </LocationEKV> */}
      </EKV>
    </WrapMap>
  );
}

export default Mapa;
