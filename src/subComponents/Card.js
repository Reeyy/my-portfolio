import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Github } from "../component/AllSvgs";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background: hsla(0, 0%, 100%, 0.55);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: #240046;
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;
const SkillPersens = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.2rem;
  border-bottom: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.body};
  border-left: 2px solid ${(props) => props.theme.body};
  padding-bottom: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
    border-bottom: 2px solid ${(props) => props.theme.text};
    border-left: 2px solid ${(props) => props.theme.text};
    border-right: 2px solid ${(props) => props.theme.text};
  }
`;
const SkillPersen = styled.span`
  margin-right: 1rem;
  font-size: calc(1.2em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  background-color: #240046;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 10px;
  font-size: calc(0.9em + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

// Framer motion configuration
const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, skillPersen, demo } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <SkillPersens>
        {skillPersen.map((t, id) => {
          return <SkillPersen key={id}> {t}%</SkillPersen>;
        })}
      </SkillPersens>
      <Footer>
        <Link href={demo} target="_blank">
          {name}
        </Link>
      </Footer>
    </Box>
  );
};

export default Card;
