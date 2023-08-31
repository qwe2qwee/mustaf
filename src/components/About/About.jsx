import React from "react";
import "./About.css";
import about from "../../assets/Imgs/about.jpg";
import AboutBox from "./AboutBox";
import pdf from "./pdf/Mustafa_Hassan.pdf";

const About = () => {
  return (
    <section className='about countainer section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <div className='about__countainer grid'>
        <div className='left'>
          <img src={about} alt='' className='about__img' />
        </div>

        <div className='about__data grid'>
          <div className='about__info'>
            <p className='about__description'>
              I am Mustafa Hassan, Graphic Designer from Jeddah,Saudi Arabia. I
              have rich experience in design and Photograph and video editing,
              also I am good at Motion Graphic.
            </p>
            <a href={pdf} download={pdf} className='btn'>
              {" "}
              Download CV
            </a>
          </div>
          <div className='about__skills grid'>
            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name '>Graphic Design</h3>
                <span className='skills__number'>92%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage graphic-Design'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name '>Photography</h3>
                <span className='skills__number'>80%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage photography'></span>
              </div>
            </div>
            <div className='skills__data'>
              <div className='skills__titles'>
                <h3 className='skills__name '>Video editing</h3>
                <span className='skills__number'>75%</span>
              </div>
              <div className='skills__bar'>
                <span className='skills__percentage video-editing'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
