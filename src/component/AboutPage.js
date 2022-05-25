import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import Me from "../assets/Images/Saly-22.svg";
import Particle from "./Particle";
import imgsnow from "../assets/Images/malam.jpg";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  background-size: cover;
  background-image: url(${imgsnow});
  width: 100vw;
  z-index: 3;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  z-index: 3;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <Particle />

        <Spaceman>
          <img src={Me} alt="spaceman" />
        </Spaceman>
        <Main>
          I'm a Junior frontend Developer Located in bogor indonesia.
          <br /> <br />
          I'm interested in the whole frontend Like trying new things and
          building great projects. I like to learn new technology and currently
          I learning React JS, and Tailwind CSS. I am eager to learn and work
          with various departments in the company, and I am a hardworking
          student, Good at teamwork and communication, self-motivated, and Cope
          well under pressure I can improve my knowledge and skill for
          furthering the company and always plan ahead so I can make sure I can
          manage my time well. I
          <br /> <br />
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
