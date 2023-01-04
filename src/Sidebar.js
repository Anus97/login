import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css'

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/university">
        University
      </a>
      <a className="menu-item" href="/admissions">
        Admissions
      </a>
      <a className="menu-item" href="/signup">
        SignUp
      </a>
      <a className="menu-item" href="/login">
        Login
      </a>
    </Menu>
  );
};