import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../component/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.text};
  font-family: "Poppins";
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  letter-spacing: 3px;
  font-weight: normal;
`;

function LogoComponent(props) {
  return <Logo color={props.theme}>Reyhan M</Logo>;
}

export default LogoComponent;
