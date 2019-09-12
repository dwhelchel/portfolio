import React, { Component } from 'react';
import '../css/Main.css';

class Main extends Component {

    constructor() {
        super();
        this.state = {}
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        
    }

    render() {
        return(
            <div className="main" id="main">
                <div className="main-container">
                    <h1>Hi, I'm Dakota</h1>
                    <p>Nice to meet you</p>
                </div>
            </div>
        );
    }
}

export default Main;