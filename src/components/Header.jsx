import React from 'react';
import BurgerMenu from './BurgerMenu';

function Header() {
  return (
    <>
      <div className="header-container">
        <div className="logo">Makaronka</div>
        <BurgerMenu />
      </div>
    </>
  );
}

export default Header;
