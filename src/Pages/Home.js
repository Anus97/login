import React from 'react';

import Header from '../Components/Header/Header';

import Footer from '../Components/Footer/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
        <div>
            <img style={{width: "100%"}} src="../assets/image.jpg" alt=""/>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
 
