import React, { useState } from 'react'
import PageContainer from '../container/PageContainer'
import '../css/Header.css'
import { GrBasket } from "react-icons/gr";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState('light') // Başlangıç teması

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    const root = document.getElementById('root');
    if (newTheme === 'dark') {
      root.style.backgroundColor = 'black';
      root.style.color = '#fff';
    } else {
      root.style.backgroundColor = '#fff';
      root.style.color = 'black';
    }
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
  )
}

export default Header;
