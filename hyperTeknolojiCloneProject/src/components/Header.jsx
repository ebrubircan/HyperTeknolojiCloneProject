import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/slices/searhSlice'; 
import '../css/Header.css';
import { Link } from 'react-router-dom';
import { GrBasket } from "react-icons/gr";
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const basketItems = useSelector(state => state.basket.items);
  const dispatch = useDispatch(); 

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
      <div className={`headerBetween ${theme}`}>
        <div>
        <Link to="/">
          <img className='logo' src="./src/images/hyperTeknoloji_logo.png" alt="Logo" />
        </Link>
        </div>
        <div className='flexRow'>
        <input 
          className='inputArea' 
          type="text" 
          placeholder="Ürün, kategori veya marka ara"
          onChange={handleSearchChange}
        />
        <div>
          {theme === 'dark' ? 
            <MdOutlineLightMode className='icon' onClick={changeTheme} /> : 
            <FaMoon className='icon' onClick={changeTheme} />
          }
          <div className="basket-icon-container">
          <Link to="/cart" className="cart-link">
            <GrBasket className="icon" />
              {basketItems.length > 0 && (
              <span className="cart-badge">{basketItems.length}</span>
            )}
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;