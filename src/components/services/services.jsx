import React from "react";
import "./services.css";
import Image1 from "../../assets/ser1.png";
import Image2 from "../../assets/ser2.png";
import Image3 from "../../assets/server11.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "Graphic Design",
    description:
      "Innovation new ideas in your business designing, #Advertising posts #Brand identity #Brochures #Interfaces of applications and websites #All advertising designs.",
  },
  {
    id: 3,
    image: Image3,
    title: "Video Editing",
    description:
      "We take your videos and edit them professsionally We put in your hands a world of visual creativity, #promo producer #games  #event  #short film  #program #visual content  #all kinds of video clips.",
  },
  {
    id: 2,
    image: Image2,
    title: "Photography",
    description:
      "We document the moment from a creative angle, #Photography of official events #Photograhy of conferences and seminars #Photography of exhibitions and others...",
  },
];

const Services = () => {
  return (
    <section className='services countainer section' id="services">
      <h2 className='section__title s'>Services</h2>
      <div className='services__container grid'>
        {data.map(({ id, image, title, description }) => {
          return (
            <div className='services__card' key={id}>
              <img src={image} alt='' className='services__img'/>
              <h3 className='services__title'>{title}</h3>
              <p className='services__description'>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
