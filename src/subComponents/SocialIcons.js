import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Discord, Facebook, Github, Twitter } from "../component/AllSvgs";
import { DarkTheme } from "../component/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? "#f8f9fa" : "#f8f9fa"};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <a
          href="https://web.whatsapp.com/"
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
        >
          <Github
            width={25}
            height={25}
            fill={props.theme === "dark" ? "#f8f9fa" : "#f8f9fa"}
          />
        </a>
      </div>
      <div>
        <a
          href="https://web.whatsapp.com/"
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
        >
          <Twitter
            width={25}
            height={25}
            fill={props.theme === "dark" ? "#f8f9fa" : "#f8f9fa"}
          />
        </a>
      </div>
      <div>
        <a
          href="https://web.whatsapp.com/"
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? "#f8f9fa" : "#f8f9fa"}
          />
        </a>
      </div>
      <div>
        <a
          href="https://discord.com/users/304995839045140481"
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
        >
          <Discord
            width={25}
            height={25}
            fill={props.theme === "dark" ? "#f8f9fa" : "#f8f9fa"}
            // kalo mau ngambil dari themes (global css)
            // fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
