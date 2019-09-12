import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../css/Navbar.css';

class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    render() {
        return(
            <div className="navbar">
                <div className="container">
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
        );
    }
}

export default Navbar;