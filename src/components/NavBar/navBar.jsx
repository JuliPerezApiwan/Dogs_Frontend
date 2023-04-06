import React from 'react';
import { Link } from 'react-router-dom';
import style from '../NavBar/navBar.module.css';
import SearchBar from '../Search/search';

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <Link to="/form">
        <button className={style.btn_nvb}>Add Dog Form</button>
      </Link>
      <SearchBar/>
    </div>
  );
};

export default NavBar;