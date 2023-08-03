import React from "react";
import "./Home.css";
import me from "../../assets/Imgs/IMG-20230705-WA0008.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className='home countainer' id='home'>
      <div className='intro'>
        <img src={me} alt='' className='home__img' />
        <h1 className='home__name'>Musta12media</h1>
        <span className='home__education'>I'm a Photography</span>

        <HeaderSocials />

        <a href='#contact' className='btn'>
          Hire Me
        </a>
        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
