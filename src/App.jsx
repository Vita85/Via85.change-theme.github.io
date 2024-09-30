import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import FooterComponent from "./components/FooterComponent";
import { Theme } from "./providers/Theme";

function App() {
  return (
    <Theme>
      <div className="wrapper">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    </Theme>
  );
}

export default App;
