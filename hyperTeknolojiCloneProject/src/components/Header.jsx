import React, { useState, useEffect } from 'react'
import PageContainer from '../container/PageContainer'
import '../css/Header.css'
import { GrBasket } from "react-icons/gr";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className='headerBetween'>
      <div>
        <img className='logo' src="./src/images/hyperTeknoloji_logo.png" alt="Logo" />
      </div>
      <div className='flexRow'>
        <input className='inputArea' type="text" placeholder="Ürün, kategori veya marka ara" />
        <div>
          {theme === 'dark' ? 
            <MdOutlineLightMode className='icon' onClick={changeTheme} /> : 
            <FaMoon className='icon' onClick={changeTheme} />
          }
          <GrBasket className='icon' />
        </div>
      </div>
    </div>
  );
}

export default Header;
