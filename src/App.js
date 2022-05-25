import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AboutPage from "./component/AboutPage";
import WorkPages from "./component/WorkPages";
import Main from "./component/Main";
import MySkillsPage from "./component/MySkillsPage";
import { DarkTheme, lightTheme } from "./component/Themes";
import GlobalStyles from "./GlobalStyles";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        {/* {/animasi buat framer motion/} */}
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="works" element={<WorkPages />} />
            <Route path="skills" element={<MySkillsPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
