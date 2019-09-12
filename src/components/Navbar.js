import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../css/Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div className="navbar">
                <div className="navbar-container">
                    <div className="link-container">
                        <Link 
                            activeClass="active"
                            to="main"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="link"
                        >Main</Link>
                        <Link 
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="link"
                        >Projects</Link>
                        <Link 
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="link"
                        >About</Link>
                        <Link 
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                            className="link"
                        >Contact</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;