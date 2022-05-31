import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import Me from "../assets/Images/Saly-43.png";
import imgsnow from "../assets/Images/malam.jpg";
import Dock from "./Dock";
import Particle2 from "./Particle2";

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
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  background: hsla(0, 0%, 100%, 0.55);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  color: ${(props) => props.theme.body};
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Poppins", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Dock />
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <Particle2 />

        <Spaceman>
          <img src={Me} alt="rockket" />
        </Spaceman>
        <Main>
          I'm a Junior frontend Web Developer Located in bogor indonesia.
          <br /> <br />
          I'm interested in the whole frontend Like trying new things and
          building great projects. I like to learn new technology and currently
          I learning React JS, and Tailwind CSS. I am eager to learn and work
          with various departments in the company, and I am a hardworking
          student, Good at teamwork and communication, self-motivated, and Cope
          well under pressure I can improve my knowledge and skill for the
          company further and always plan ahead so I can make sure I can manage
          my time well.
          <br /> <br />
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
