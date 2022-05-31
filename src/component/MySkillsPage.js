import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";

import { Skills } from "../data/SkillData";
import Card from "../subComponents/Card";
import BigTitlte from "../subComponents/BigTitlte";

import Me from "../assets/Images/Planet-9.png";
import Particle from "./Particle";
import Particle2 from "./Particle2";
import Dock from "./Dock";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  background-image: ${(props) => DarkTheme.backgroundImage};
  z-index: 3;
  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  z-index: 3;
  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 3;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const MySkillsPage = () => {
  const ref = useRef(null);
  const spin = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (spin.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <Particle2 />
        <Dock />
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Skills.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>
        <Rotate ref={spin}>
          <img width={80} height={80} src={Me} alt="spaceman" />
        </Rotate>

        <BigTitlte text="Scroll Down" top="65%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
