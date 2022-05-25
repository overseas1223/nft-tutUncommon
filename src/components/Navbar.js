import React, { useRef, useLayoutEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/avatar.png";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const useWindowSize = () => {
    const [size, setSize] = useState(0);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();
        return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
};

const Navbar = () => {
    const toggleRef = useRef(null);
    const width = useWindowSize();

    const handleToggleClick = () => {
        if(width < 992) toggleRef.current.click();
    }

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand" style={{ cursor: 'pointer' }}>
                    <Link
                        to="mint"
                        spy={true}
                        smooth={true}
                        offset={-56}
                        duration={500}

                    >
                        <div className="img-div">
                            <img src={Logo} alt="logo" />
                        </div>
                    </Link>
                </div>
                <button className="navbar-toggler" ref={toggleRef} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center" id="navbarText">
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item link-style">
                            <a href="https://www.instagram.com/tutuncommonnft"
                            >
                                <FaInstagram />
                            </a>
                        </li>
                        <li className="nav-item link-style">
                            <a href="https://twitter.com/TutUncommonNFT twitter"
                            >
                                <FaTwitter />
                            </a>
                        </li>
                        <li className="nav-item link-style">
                            <Link
                                onClick={handleToggleClick}
                                activeClass="link-style-active"
                                data-bs-toggle="collapse"
                                to="mint"
                                spy={true}
                                smooth={true}
                                offset={-56}
                                duration={500}
                            >
                                Mint
                            </Link>
                        </li>
                        <li className="nav-item link-style">
                            <Link
                                onClick={handleToggleClick}
                                activeClass="link-style-active"
                                data-bs-toggle="collapse"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-56}
                                duration={500}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item link-style">
                            <Link
                                onClick={handleToggleClick}
                                activeClass="link-style-active"
                                data-bs-toggle="collapse"
                                to="features"
                                spy={true}
                                smooth={true}
                                offset={-56}
                                duration={500}
                            >
                                Features
                            </Link>
                        </li>
                        <li className="nav-item link-style">
                            <Link
                                onClick={handleToggleClick}
                                activeClass="link-style-active"
                                data-bs-toggle="collapse"
                                to="rarity"
                                spy={true}
                                smooth={true}
                                offset={-56}
                                duration={500}
                            >
                                Rarity
                            </Link>
                        </li>
                        <li className="nav-item link-style">
                            <Link
                                onClick={handleToggleClick}
                                activeClass="link-style-active"
                                data-bs-toggle="collapse"
                                to="team"
                                spy={true}
                                smooth={true}
                                offset={-56}
                                duration={500}
                            >
                                Team
                            </Link>
                        </li>
                        <li className="nav-item link-style">
                            <Link
                                onClick={handleToggleClick}
                                activeClass="link-style-active"
                                data-bs-toggle="collapse"
                                to="faq"
                                spy={true}
                                smooth={true}
                                offset={-56}
                                duration={500}
                            >
                                Faq
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;