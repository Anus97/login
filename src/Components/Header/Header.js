import React from 'react';
import './Header.css'
function Header() {
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="search">
          <div className="input">
            <input
              type="text"
              placeholder="Search Universities"
            />
          </div>
          <div className="searchAction">
            
          </div>
        </div>
        <div className="language">
          <span> SignUp </span>
          
        </div>

        <div className="aboutMenu">
          
          <div className="aboutMenuContent">
            
            <span>About</span>
          </div>
        </div>

        <div className="loginPage">
          <span>Login</span>
          <hr />
        </div>

      </div>
    </div>
  );
}

export default Header;
