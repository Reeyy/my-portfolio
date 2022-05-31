import React from "react";
import bghome from "../assets/Images/bg1.png";
import email from "../assets/Images/email.svg";
import about from "../assets/Images/aboutme.svg";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import home from "../assets/Images/home.svg";
import cv from "../assets/Images/downloadcv.svg";
import project from "../assets/Images/projects.png";
import skills from "../assets/Images/skilss.png";
import whatsapp from "../assets/Images/icon.png";

import "./Dock.css";

const Docktyle = styled.div`
  position: fixed;
  z-index: 6;
  bottom: 0;
  text-align: center;
  right: 20%;
  left: 20%;
  width: 60%;
  /* background: hsla(0, 0%, 100%, 0.55); */
  backdrop-filter: blur(0.6px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px 10px 0 0;
`;

const About = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;

const Home = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 6;
`;

const Skills = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const WorkPage = styled(Link)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Dock = () => {
  return (
    <Docktyle>
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
        <div id="dock-container">
          <ul>
            <li>
              <span>Home</span>{" "}
              <Home to="/">
                <img src={home} alt="home" />
              </Home>
            </li>

            <li>
              <span>About Me</span>{" "}
              <About to="/about">
                <img src={about} alt="home" />
              </About>
            </li>
            <li>
              <span>Skills</span>{" "}
              <Skills to="/skills">
                <img src={skills} alt="home" />
              </Skills>
            </li>
            <li>
              <span>Works</span>{" "}
              <WorkPage to="/works">
                <img src={project} alt="home" />
              </WorkPage>
            </li>
            <li>
              <span>Email</span>{" "}
              <a href="mailto:reyhanmuhammadj.com">
                <img src={email} alt="home" />
              </a>
            </li>

            <li>
              <span>Whatsapp</span>{" "}
              <a href="https://wa.me/+6287888243662">
                <img src={whatsapp} alt="home" />
              </a>
            </li>
            <li>
              <span>Download Cv</span>{" "}
              <a href="https://cdn.discordapp.com/attachments/979031435337932821/979179031578697728/CV_Reyhan_M_Januar.pdf">
                <img src={cv} alt="home" />
              </a>
            </li>
          </ul>
        </div>
      </motion.h2>
    </Docktyle>
  );
};

export default Dock;
