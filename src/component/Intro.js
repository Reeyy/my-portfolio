import styled, { keyframes } from "styled-components";

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
  background: hsla(0, 0%, 100%, 0.55);
  backdrop-filter: blur(30px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  width: 55vw;
  height: 55vh;

  display: flex;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  background: linear-gradient(
        to right,
        hsla(0, 0%, 100%, 0.55) 50%,
        hsla(0, 0%, 100%, 0.55) 50%
      )
      bottom,
    linear-gradient(
        to right,
        hsla(0, 0%, 100%, 0.55) 50%,
        hsla(0, 0%, 100%, 0.55) 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid hsla(0, 0%, 100%, 0.55);
  border-right: 2px solid hsla(0, 0%, 100%, 0.55);

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
    color: #f8f9fa;
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 400;
  }

  @media (max-width: 50em) {
    flex-direction: none;
    padding: 5rem;

    & > :first-child {
    }
  }
`;

const bounce = keyframes`
  20% { transform: rotate(-10deg) }
  40%, 60% { transform: rotate(12deg)  }
  50% { transform: rotate(-5deg)  }
  70% { transform: rotate(0deg) }
  100% { transform: rotate(1deg) }
`;

const Animasi = styled.div`
  @media (max-width: 50em) {
    & > :first-child {
      display: none;
    }
  }
  & > :first-child {
    animation: ${bounce} 10s linear 3s infinite;
  }
`;

const Intro = () => {
  return (
    <>
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
            <Animasi>
              <Lottie
                fill="currentColor"
                loop="true"
                animationData={animation}
              />
            </Animasi>
          </motion.div>
        </SubBox>
      </Box>
    </>
  );
};

export default Intro;
