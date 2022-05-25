import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import { About, Features, Mint, Rarity, Team, Faq } from "../components/sections";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import "../assets/style.css";

const User = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="section-body">
        <Mint />
        <About />
        <Features />
        <Rarity />
        <Team />
        <Faq />
      </div>
      {showButton &&
        <div className="back-to-top">
          <a id="back-to-top" href="#" className="btn btn-dark btn-lg back-to-top" role="button">
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      }
    </div>
  );
}
export default User;