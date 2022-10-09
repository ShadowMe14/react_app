import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const styleActive = ({isActive}) => ({color: isActive ? 'red' : 'white'});

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" style={styleActive}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" style={styleActive}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" style={styleActive}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" style={styleActive}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" style={styleActive}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
