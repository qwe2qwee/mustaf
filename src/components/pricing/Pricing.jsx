import React from "react";
import "./Pricing.css";
import im1 from "../../assets/price1.png";
import im2 from "../../assets/price2.png";
import im3 from "../../assets/price3.png";
import pr1 from "./pdf/packages/super.jpg"
import pr2 from "./pdf/packages/ult.jpg"
import pr3 from "./pdf/packages/mini.jpg"


const Pricing = () => {
  return (
    <section className='pricing countainer section'>
      <h2 className='section__title'>Pricing Plans</h2>
      <div className='pricing__container grid'>
        <div className='pricing__item'>
          <img src={im1}  alt='j' className='pricing__img' />
          <h3 className='pricing__plan'>Basic</h3>
          <p className='pricing__title'>
          10 Designs , Number of modifications allowed 3 .
          </p>
          <p className='pricing__support'>Instagram</p>
          <h3 className='price'>
            <em>$</em> 101
          </h3>
          <a href={pr3} download className='btn'>
            Get Started
          </a>
        </div>
        <div className='pricing__item best'>
          <span className="badge">Recomonded</span>
          <img src={im2} alt='j' className='pricing__img' />
          <h3 className='pricing__plan'>Premium</h3>
          <p className='pricing__title'>30 Designs , Editing is allowed once for free per post.</p>
          <p className='pricing__support' >Instagram</p>
          <h3 className='price'>
            <em>$</em> 245
          </h3>
          <a href={pr1} download className='btn'>
            Get Started
          </a>
        </div>
        <div className='pricing__item'>
          <img src={im3} alt='j' className='pricing__img' />
          <h3 className='pricing__plan'>Ultimate</h3>
          <p className='pricing__title'> 15 Designs , Number of modifications allowed 6 .</p>
          <p className='pricing__support'>Instagram</p>
          <h3 className='price'>
            <em>$</em> 146
          </h3>
          <a href={pr2} download className='btn'>
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
