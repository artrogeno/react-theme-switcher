import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

import useStoreState from "./utils/useStoreState";
import GlobalSyle from "./styles/global";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Header from "./components/Header";

const App = () => {
  const [theme, setTheme] = useStoreState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalSyle />
      <div className="App">
        <Header toggleTheme={toggleTheme}></Header>
      </div>
    </ThemeProvider>
  );
};

export default App;
