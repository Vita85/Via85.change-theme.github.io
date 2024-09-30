import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../providers/Theme";

const FooterComponent = () => {
  const [theme] = useContext(ThemeContext);
  return <footer className={`footer-${theme}`}>FOOTER CONTENT</footer>;
};

export default FooterComponent;
