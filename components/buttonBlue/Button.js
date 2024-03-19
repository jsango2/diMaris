import Link from "next/link";

import React from "react";
import { WrapButton } from "./styles.js";

const Button = ({ text, color, bgcolor, width, linkTo, marginTop }) => {
  return (
    <WrapButton
      color={color}
      bgcolor={bgcolor}
      width={width}
      marginTop={marginTop}
    >
      <a href={linkTo}> {text}</a>
    </WrapButton>
  );
};

export default Button;
