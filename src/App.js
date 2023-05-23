import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Company from './Components/Company';
import Products from './Components/Products';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';

import WelcomeMobile from './Components/WelcomeMobile';
import CompanyMobile from './Components/CompanyMobile';
import ProductsMobile from './Components/ProductsMobile';

import './App.css';




function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="App">

      <Navbar />
      {
      windowWidth > 478 ? <Welcome /> : <WelcomeMobile />
      }
      {
      windowWidth > 478 ? <Company /> : <CompanyMobile />
      }
      {
      windowWidth > 478 ? <Products /> : <ProductsMobile />
      }
      <AboutUs />
      <Contact />

    </div>
  );
}

export default App;