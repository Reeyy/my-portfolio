import React from "react";
import styled from "styled-components";
import {
  Discord,
  Facebook,
  Github,
  Twitter,
  YouTube,
} from "../component/AllSvgs";
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
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
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
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
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
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
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
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
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
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </div>

      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
