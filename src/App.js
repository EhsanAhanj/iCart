import React from "react";
import useSticky from "./hooks/useSticky.js";
import About from "./components/Header/About";
import "./App.scss";
import shadow from "./assets/images/shadow1.svg";
import cut from "./assets/images/cut.svg";
import cut2 from "./assets/images/shadowcut2.svg";
import FullpageLoader from "./components/common/FullpageLoader/FullpageLoader.jsx";

const Navbar = React.lazy(() => import("./components/Header/Navbar"));
const Welcome = React.lazy(() => import("./components/Header/Welcome"));
const Fab = React.lazy(() => import("./components/Modals/Fab.jsx"));

const loading = () => <FullpageLoader />;

function App() {
  const { isSticky, element } = useSticky();
  return (
    <React.Suspense fallback={loading()}>
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
      <img className="comcom" src={shadow} alt="svg"></img>
      <img className="cutcut" src={cut} alt="svgcut"></img>
      <img className="cutcut2" src={cut2} alt="svgcut"></img>
      <About />
      <About />
      <Fab />
    </React.Suspense>
  );
}

export default App;
