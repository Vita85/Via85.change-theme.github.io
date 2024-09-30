import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../providers/Theme";

const MainComponent = () => {
  const [theme] = useContext(ThemeContext);
  return <main className={`main-${theme}`}>MAIN CONTENT</main>;
};

export default MainComponent;
