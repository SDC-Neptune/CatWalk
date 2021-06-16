import React, { useState } from 'react';

const Navbar = ({setProductId}) => {
  const [newProdId, setNewProdId] = useState('');

  const searchHandler = () => {
    setProductId(newProdId);
    setNewProdId('');
  };

  const changeHandler = (e) => {
    setNewProdId(String(e.target.value));
  };

  return (
    <nav className="navbar">
      <div className="logo">LOGO</div>
      <div className="search-area">
        <input type="text" value={newProdId} onChange={changeHandler} />
        <button className="search-button" onClick={searchHandler} >Search</button>
      </div>
    </nav>
  );
};

export default Navbar;