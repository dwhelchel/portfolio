import React, { Component } from 'react';
import '../css/Card.css';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-img">
                    <img src="" />
                </div>
                <div className="card-description">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.description}</p>
                    <div className="card-button"><a href={this.props.github}></a></div>
                    {
                        this.props.demo 
                        ? <div className="card-button"><a href={this.props.demo}>Live Demo</a></div>
                        : null 
                    }
                </div>
            </div>
        )
    }
}

export default Card;