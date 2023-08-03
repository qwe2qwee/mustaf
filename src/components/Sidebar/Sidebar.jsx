import React ,{useState} from "react";
import "./Sidebar.css";
import Logo from "../../assets/logoo.png";


const Sidebar = () => {
  const [toggle , setToggle] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href='#Home' className='nav__logo'>
          <img src={Logo} className='lo' alt='logo' />
        </a>
        <nav className='nav'>
          <div className='nav__menu'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a href='#home' className='nav__link'>
                  <i className='icon-home'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a href='#about' className='nav__link'>
                  <i className='icon-user-following'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a href='#services' className='nav__link'>
                  <i className='icon-settings'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a href='#resume' className='nav__link'>
                  <i className='icon-briefcase'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a href='#work' className='nav__link'>
                  <i className='icon-layers'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a href='#blog' className='nav__link'>
                  <i className='icon-note'></i>
                </a>
              </li>
              <li className='nav__item'>
                <a href='#contact' className='nav__link'>
                  <i className='icon-bubble'></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div></div>
        {/* <div className="copy">&copy; 2022 - 2023.</div> */}
      </aside>
      <div className={toggle ? "nav__toggle nav__toggle-open" :"nav__toggle"} onClick={()=> setToggle(!toggle)}>
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
