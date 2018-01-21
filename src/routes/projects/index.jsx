import React, { Component } from 'react';

import Intro from '../../containers/Intro.jsx'

export default class Photos extends Component {
    render(){
        return (
            <div className="about">
                <div className="container">
                    <Intro />
                    <div className="content-brick">
                        <p>Projects</p>
                    </div>
                </div>
            </div>
        );
    }
}