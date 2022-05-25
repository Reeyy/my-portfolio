import React from "react";
import bghome from "../assets/Images/bg1.png";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "./Dock.css";

const Docktyle = styled.div`
  position: fixed;
  z-index: 5;
  bottom: 0;
  text-align: center;
  right: 20%;
  left: 20%;
  width: 60%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px 10px 0 0;
`;

const About = styled(Link)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
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
              <span>About Me</span>{" "}
              <About to="/about">
                <img src={bghome} alt="home" />
              </About>
            </li>
            <li>
              <span>Skills</span>{" "}
              <Skills to="/skills">
                <img src={bghome} alt="home" />
              </Skills>
            </li>
            <li>
              <span>Works</span>{" "}
              <WorkPage to="/works">
                <img src={bghome} alt="home" />
              </WorkPage>
            </li>
            <li>
              <span>Firefox</span>{" "}
              <a href="#">
                <img src={bghome} alt="home" />
              </a>
            </li>
          </ul>
        </div>
      </motion.h2>
    </Docktyle>
  );
};

export default Dock;
