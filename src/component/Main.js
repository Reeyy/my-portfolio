import styled from "styled-components";
import React, { useState } from "react";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { Link } from "react-router-dom";
import { Rocket, YinYang } from "./AllSvgs";
import { keyframes } from "styled-components";
import Lottie from "lottie-react";
import animation from "../assets/svg/56288-emoji-32.json";
import Intro from "./Intro";
import { DarkTheme } from "../component/Themes";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Dock from "./Dock";
import Particle from "./Particle";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  background-image: ${(props) => props.theme.backgroundImage};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-size: cover;
  z-index: 3;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding: 2rem;
`;
// const Contact = styled.a`
//   color: ${(props) => props.theme.text};
//   position: absolute;
//   top: 2rem;
//   right: calc(1rem + 2vw);
//   text-decoration: none;
//   z-index: 1;
//   font-family: "Poppins";
//   font-weight: Normal;
//   font-size: 20px;
//   top: 2rem;
// `;

const Contact = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.body};
  font-family: "Poppins";
  position: fixed;
  right: 2rem;

  top: 2.9rem;
  z-index: 3;
  letter-spacing: 3px;
  font-weight: normal;
  text-decoration: none;
  font-size: 20px;
`;

// const Works = styled(Link)`
//   color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
//   position: absolute;
//   top: 50%;
//   left: calc(1rem + 2vw);
//   transform: translate(-50%, -50%) rotate(-90deg);
//   text-decoration: none;
//   z-index: 1;
// `;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 3;
  display: flex;
  justify-content: space-evenly;
`;

const bounce = keyframes`
  20% { transform: rotate(-20deg) }
  40%, 60% { transform: rotate(10deg)  }
  50% { transform: rotate(-10deg)  }
  70% { transform: rotate(10deg) }
  100% { transform: rotate(-5deg) }
`;

const zoomHover = keyframes`
  40% { transform: scale(1.5); }
  80% { transform: scale(1); }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  z-index: 3;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  @media (max-width: 1900px) {
    & > :first-child {
      width: auto;
      height: 180px;
    }
  }
  @media (max-width: 50em) {
    & > :first-child {
      width: auto;
      height: 100px;
    }
  }
  & > :first-child {
    animation: ${bounce} 10s linear 3s infinite;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  background-image: ${(props) => DarkTheme.backgroundImage};
  top: 0;
  background-size: cover;
  background-color: #000;
  bottom: 0;
  overflow: hidden;
  right: 50%;
  width: ${(props) => (props.click ? "50vw" : "0%")};
  height: ${(props) => (props.click ? "135vh" : "0%")};
  z-index: 3;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <Particle />
      <DarkDiv click={click} />
      <Container>
        <PowerButton></PowerButton>
        <LogoComponent theme={+click ? "dark" : "light"} />
        <SocialIcons theme={+click ? "dark" : "light"} />
        <Center click={click}>
          <Lottie
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
            loop="true"
            animationData={animation}
          />
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span onClick={() => handleClick()} style={{ color: "#4f4f4f" }}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  cursor: "",
                  strings: ["Click Me....(◕‿◕)", "Thank You...(•◡•๑)"],
                }}
              />
            </span>
          </motion.h2>
        </Center>
        <Contact href="mailto:reyhanmuhammadj.com" style={{ color: "#f8f9fa" }}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 100,
                strings: ["Get in touch"],
              }}
            />
          </motion.h2>
        </Contact>

        <BottomBar>
          <Dock />
        </BottomBar>
      </Container>
      {click ? <Intro click={+click} goback={handleClick} /> : null}
    </MainContainer>
  );
};

export default Main;
