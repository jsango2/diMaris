import { withTranslateRoutes } from "next-translate-routes";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { useState, createContext } from "react";
// import AppContext from "../components/AppContext";

import { animations } from "../lib/animations";
import "../styles/index.css";
// import "../styles/normalize.css";
import "../styles/pagination.css";
import React from "react";

const pages = [
  { href: "/", name: "Index" },
  { href: "/blog", name: "One" },
];

export const AppContext = React.createContext();

function MyApp({ Component, pageProps, router, allPosts }) {
  const [novostiNasloviContext, setNovostiNasloviContext] = useState([]);
  const [category, setCategory] = useState("");
  const startIndex = 2;
  const [animation, setAnimation] = useState(animations[startIndex]);
  const [exitBefore, setExitBefore] = useState(false);

  return (
    <AppContext.Provider value={[category, setCategory]}>
      <div className="app-wrap">
        {/* <LazyMotion features={domAnimation}>
          <AnimatePresence exitBeforeEnter={!exitBefore}>
            <m.div
              key={router.route.concat(animation.name)}
              className="page-wrap"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={animation.variants}
              transition={animation.transition}
            > */}
        <Component {...pageProps} />
        {/* </m.div>
          </AnimatePresence>
        </LazyMotion> */}
      </div>
    </AppContext.Provider>
  );
}
export default withTranslateRoutes(MyApp);
