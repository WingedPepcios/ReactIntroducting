import React, { useState, useEffect } from 'react';
import './css/global.scss';

const Menu = () => {

  const [menuState, setMenuState] = useState(0);
  
useEffect(() => {
  window.addEventListener('click', (e) => {
    if (!e.target.closest('.topnav')){
      setMenuState(0);
    }
  })

  return () => {
    window.removeEventListener('click', () => {});
  }
})

  return (
  <>
    <div className="topnav">
      <a onClick={() => setMenuState(1)} className={`${menuState === 1 ? 'active' : ''}`} href="#home">
        <span>Home</span>

        {menuState === 1
        ? (<ul className="submenu">
            <li><span>Element 1</span></li>
            <li><span>Element 2</span></li>
            <li><span>Element 3</span></li>
          </ul>)
        : ''
        }
      </a>
      
      <a onClick={() => setMenuState(2)} className={`${menuState === 2 ? 'active' : ''}`} href="#news">
        <span>News</span>
        
        {menuState === 2
        ? (<ul className="submenu">
            <li><span>Element 1</span></li>
            <li><span>Element 2</span></li>
            <li><span>Element 3</span></li>
          </ul>)
        : ''
        }
      </a>
      
      <a onClick={() => setMenuState(3)} className={`${menuState === 3 ? 'active' : ''}`} href="#contact">
        <span>Contact</span>

        {menuState === 3
        ? (<ul className="submenu">
            <li><span>Element 1</span></li>
            <li><span>Element 2</span></li>
            <li><span>Element 3</span></li>
          </ul>)
        : ''
        }
      </a>
      
      <a onClick={() => setMenuState(4)} className={`${menuState === 4 ? 'active' : ''}`} href="#about">
        <span>About</span>

        {menuState === 4
        ? (<ul className="submenu">
            <li><span>Element 1</span></li>
            <li><span>Element 2</span></li>
            <li><span>Element 3</span></li>
          </ul>)
        : ''
        }
      </a>
    </div>
  </>
  );
};

export default Menu;