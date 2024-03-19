// import { Link } from "gatsby"
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import Button from "../button/button.js";
// import { useHistory } from "react-router-dom"
import { WrapAll } from "./style.js";
// import scrollTo from "gatsby-plugin-smoothscroll"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { HashLink } from "react-router-hash-link";

import LanguageSwitcher from "../language switcher/index.js";
import { useRouter } from "next/router.js";
import useScrollBlock from "../helper/useScrollBlock.js";

const MeniMobile = ({
  isOpen,
  setIsOpen,
  closeMenu,
  novostiNaslovi,
  oglasiNaslovi,
}) => {
  const [isOnamaMenuOpen, setIsOnamaMenuOpen] = useState(false);
  const [isGroupMenuOpen, setIsGroupMenuOpen] = useState(false);
  const { locale } = useRouter();
  // const [blockScroll, allowScroll] = useScrollBlock();

  // const history = useHistory()
  // const goToHome = () => {
  //   // console.log("klikni")
  //   // let path = `/`
  //   // history.push(path)
  // }
  useEffect(() => {
    if (isOpen === false) {
      setIsOnamaMenuOpen(false);
      setIsGroupMenuOpen(false);
    }
  }, [isOpen]);

  return (
    <>
      <div className={`menu ${isOpen ? "openMenu" : "closedMenu"}`}>
        <div
          onClick={() => {
            setIsOnamaMenuOpen(!isOnamaMenuOpen);
            setIsGroupMenuOpen(false);
          }}
          className={`linkOnama ${
            isOnamaMenuOpen ? "linkOnamaOpen" : "linkOnamaClosed"
          }`}
        >
          {locale === "hr" ? "O nama" : "About us"}
        </div>
        {isOnamaMenuOpen && (
          <div className="mobileSubLinkParent">
            <Link href="/o-nama">
              {locale === "hr" ? "Naša priča" : "Our story"}
            </Link>
            <Link href="/marikomerc-kvalitete">
              {locale === "hr" ? "Marikomerc kvalitete" : "Marikomerc quality"}
            </Link>
            <Link href="/prerada-i-skladiste">
              {locale === "hr"
                ? "Prerada i skladište"
                : "Processing and Storage"}
            </Link>
          </div>
        )}
        <Link className="mobileLinks" href="/proizvodi">
          {locale === "hr" ? "Proizvodi" : "Products"}
        </Link>
        <Link href="/horeca">
          {locale === "hr" ? "HoReCa suradnja" : "HoReCa collaboration"}
        </Link>
        <Link href="/karijere">{locale === "hr" ? "Karijere" : "Careers"}</Link>
        <Link href="/kontakt">{locale === "hr" ? "Kontakt" : "Contact"}</Link>
        <Link href="/novosti">{locale === "hr" ? "Novosti" : "News"}</Link>
        <div
          onClick={() => {
            setIsGroupMenuOpen(!isGroupMenuOpen);
            setIsOnamaMenuOpen(false);
          }}
          className={`linkGroup ${
            isGroupMenuOpen ? "linkGroupOpen" : "linkGroupClosed"
          }`}
        >
          {locale === "hr" ? "Grupa" : "Group"}
        </div>
        {isGroupMenuOpen && (
          <div className="mobileSubLinkParent">
            <Link className="navLinkDrop" href="/MLS">
              {locale === "hr" ? "MLS Logistika" : "MLS Logistics"}
            </Link>
            <Link className="navLinkDrop" href="/">
              {locale === "hr"
                ? "Di Maris - Ribarnice"
                : "Di Maris - Fish market"}
            </Link>
            <Link className="navLinkDrop" href="/">
              {locale === "hr" ? "Perla - Biser Mora" : "Perla - Sea Pearl"}
            </Link>
          </div>
        )}
        <div className="mobileLinkDivider"></div>
        <LanguageSwitcher
          closeMenu={closeMenu}
          novostiNaslovi={novostiNaslovi}
          oglasiNaslovi={oglasiNaslovi}
        />
        <div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
          >
            {" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default MeniMobile;
