import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AboutPage from "./component/AboutPage";
import WorkPages from "./component/WorkPages";
import Main from "./component/Main";
import MySkillsPage from "./component/MySkillsPage";
import { DarkTheme, lightTheme } from "./component/Themes";
import WorkPage from "./component/WorkPage";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="works" element={<WorkPages />} />
          <Route path="work" element={<WorkPage />} />
          <Route path="skills" element={<MySkillsPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
