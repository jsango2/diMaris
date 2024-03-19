import Link from "next/link";
import React, { useState, useRef } from "react";
// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import Headroom from "react-headroom"
// import scrollTo from "gatsby-plugin-smoothscroll"
// import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";
import ArrowDown from "../svg/arrowDown.svg";
import MeniMobile from "./meni/meniMobile";
import { Link as Veza } from "react-scroll";
// import scrollTo from "gatsby-plugin-smoothscroll"
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import LanguageSwitcher from "./language switcher";
import MarikomercLogo from "../svg/MarikomercGrupaWhite.svg";
// import HeroLogo from "../assets/images/herologo.png";
// import HeroLogo from "../assets/images/MClogo2023.svg";
import { useOnClickOutside } from "./helper/useClickOutside";
import useScrollBlock from "../components/helper/useScrollBlock";
import { useEffect } from "react";
import Headroom from "react-headroom";
const Header = ({ siteTitle, novostiNaslovi, oglasiNaslovi }) => {
  const ref = useRef();
  // State for our modal
  const [blockScroll, allowScroll] = useScrollBlock();

  // Call hook passing in the ref and a function to call on outside click
  // useOnClickOutside(ref, () => setIsOnamaOpen(false));

  const router = useRouter();
  const { locale } = router;

  const [isOpen, setIsOpen] = useState(false);

  const [message, setMessage] = useState("Hello World");

  // const [isOnamaOpen, setIsOnamaOpen] = useState(false);

  function handleCloseMenu() {
    setIsOpen(false);
  }

  // useEffect(() => {
  //   isOpen == true ? blockScroll() : allowScroll();
  // }, [isOpen]);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = isOpen ? "hidden" : "";
    }
  }, [isOpen]);

  return (
    <>
      <Headroom>
        <header>
          <MeniMobile
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            closeMenu={handleCloseMenu}
            novostiNaslovi={novostiNaslovi}
            oglasiNaslovi={oglasiNaslovi}
          />
          <div className="headerWrap">
            <div className="navBar">
              <Link href="/">
                <div className="navLink navTitle navLogo">
                  <Image src="/DiMarisLogoHeader.svg" layout="fill" />
                </div>
              </Link>
              <div>
                <GiHamburgerMenu
                  className="hamburgerMenu"
                  onClick={() => {
                    setIsOpen(() => !isOpen);

                    // blockScroll()
                  }}
                />

                <div className="navLinks">
                  <div>
                    <Link className="navLink" href="/#lokacije">
                      {locale === "hr" ? "Prodajna mjesta" : "Sales points"}
                    </Link>
                  </div>
                  <div className="navLink borderNav"></div>
                  <div className="dropdown">
                    <div className="dropdown-content">
                      {/* <Link className="navLinkDrop" href="/MLS">
                        {locale === "hr" ? "MLS Logistika" : "MLS Logistics"}
                      </Link> */}
                      <Link
                        className="navLinkDrop"
                        href="https://www.marikomerc.hr"
                      >
                        Marikomerc
                      </Link>
                      <Link className="navLinkDrop" href="/">
                        {locale === "hr"
                          ? "Perla - Biser Mora"
                          : "Perla - Sea Pearl"}
                      </Link>
                    </div>
                    <div
                      style={{ cursor: "pointer", marginRight: "20px" }}
                      // onMouseOver={handleOnamaOpen}
                    >
                      <Link className="navLink" href="/">
                        {locale === "hr" ? "Grupa" : "Group"}
                      </Link>
                      <ArrowDown
                        style={{ position: "relative", marginLeft: "-8px" }}
                      />
                    </div>
                  </div>
                  <div className="languageSwitcher">
                    {/* <ArrowDown
                    style={{
                      position: "relative",
                      marginLeft: "-8px",
                      marginRight: "5px",
                    }}
                  /> */}

                    <LanguageSwitcher
                      novostiNaslovi={novostiNaslovi}
                      closeMenu={handleCloseMenu}
                      oglasiNaslovi={oglasiNaslovi}
                    />
                  </div>
                  {/* <Veza
                activeClass="active"
                to="prijava"
                spy={true}
                smooth="easeInOutCubic"
                offset={0}
                duration={1800}
              > */}

                  {/* </Veza> */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </Headroom>
    </>
    // </Headroom>
  );
};

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;
