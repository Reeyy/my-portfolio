import styled from "styled-components";
import Me from "../assets/Images/VA-LOGO.png";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animation from "../assets/svg/97305-face-with-rolling-eyes-emoji.json";
import animation2 from "../assets/svg/28086-wow-emoji.json";
import Particle from "./Particle";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 55vw;
  height: 55vh;

  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 5;
`;
const SubBox = styled(motion.div)`
  width: 50%;
  position: relative;
  display: flex;
  z-index: 3;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;
const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  font-weight: small;
  padding: 2rem;
  cursor: pointer;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:first-child {
    color: #f8f9fa;
  }

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;

const Intro = () => {
  return (
    <>
      <Particle />
      <Box
        initial={{ height: 0 }}
        animate={{ height: "55vh" }}
        transition={{
          type: "spring",
          duration: 2,
          delay: 1,
        }}
      >
        <SubBox>
          <Text>
            <h1>HI </h1>
            <h3>My Name Is Reyhan M</h3>
            <h6> I like to design and code simple and interactive websites</h6>
          </Text>
        </SubBox>
        <SubBox>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 3,
              delay: 1,
            }}
          >
            <div>
              <Lottie
                fill="currentColor"
                loop="true"
                animationData={animation}
              />
            </div>
          </motion.div>
        </SubBox>
      </Box>
    </>
  );
};

export default Intro;
