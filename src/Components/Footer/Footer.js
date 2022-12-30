import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Trivandrum</li>
              <li>Pathanamthitta</li>
              <li>Alappuzha</li>
              <li>Ernakulam</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About University</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Students</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Kerala</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Kerala</p>
        <p>Kerala University © 2006-2022</p>
      </div>
    </div>
  );
}

export default Footer;
