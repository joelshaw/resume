import React, { Component } from 'react';

import Intro from '../../components/Intro.jsx'

export default class About extends Component {
    render(){
        return (
            <div className="about">
                <div className="container">
                    <Intro />
                    <h1>About</h1>
                </div>
            </div>
        );
    }
}