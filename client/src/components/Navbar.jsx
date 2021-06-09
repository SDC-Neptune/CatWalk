import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <div className="search-area">
        <input type="text" />
        <button className="search-button">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;