import React from "react";
import styled from "styled-components";
import BgImg from "../assets/Images/siang.jpg";
import Particle2 from "./Particle2";
import { motion } from "framer-motion";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { Works } from "../data/WorkData";
import WorkComponent from "./WorkComponent";
import { DarkTheme } from "./Themes";
import Dock from "./Dock";

const MainContainer = styled(motion.div)`
  background-image: url(${BgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
  z-index: 2;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
  @media (max-width: 40em) {
    left: 1rem;
    top: 10rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);

  @media (max-width: 50em) {
    grid-template-columns: 100%;
  }
  //untuk responsive
`;
// untuk Framer-motion
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
const BlogPage = (props) => {
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <Dock />
        <Particle2 />
        <LogoComponent />

        <PowerButton />
        <SocialIcons />

        <Center>
          <Grid>
            {Works.map((work) => {
              return <WorkComponent key={work.id} work={work} />;
            })}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
