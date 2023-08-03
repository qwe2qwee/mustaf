import React, { useState } from "react";
import "./Portfolio.css";
import Menu from "./Munu";

const Portfolio = () => {
  const [items, setitems] = useState(Menu);

  const filterItems = (cate) => {
    const update = Menu.filter((ff) => { return ff.category === cate;})
    setitems(update);
  }
  return (
    <section className='work countainer section' id='work'>
      <h2 className='section__title'>Recent Works</h2>
      <div className='work__filters'>
        <span className='work__item'onClick={()=>setitems(Menu)}>Everything</span>
        <span className='work__item'onClick={()=>filterItems("Design")}>Design</span>
        <span className='work__item'onClick={()=>filterItems("Branding")}>Branding</span>
        <span className='work__item'onClick={()=>filterItems("Editing")}>Editing</span>
        <span className='work__item'onClick={()=>filterItems("Motion graphic")}>Motion graphic</span>
      </div>
      <div className='work__countainer grid'>
        {" "}
        {items.map((e) => {
          const { id, image, title, category ,a } = e;
          return (
            <div className='work__card' key={id}>
              <div className='work__thumbnail'>
                <img src={image} alt='img' />
                <div className='work__mask'></div>
              </div>
              <span className='work__category'>{category}</span>
              <h3 className='work__title'>{title}</h3>
              <a href={a}  target="_blank" className='work__button'>
                <i className='icon-link work__button-icon'></i>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
