import React from "react";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About";
import Services from "./components/services/services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/porfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Testimon from "./components/testimonials/Testimon";
import Contect from "./components/contect/Contect";

const App = () => {
  return (
    <>
      <div>
        <Sidebar />
        <main>
          <Home />
          <About />
          <Services />
          <Resume />
          <Portfolio />
          <Pricing />
          <Testimon />
          <Contect />
        </main>
      </div>
    </>
  );
};

export default App;
