import React, { Component } from 'react';

import Intro from '../../containers/Intro.jsx';
import Bio from '../../containers/Bio.jsx';
import Resume from '../../containers/Resume.jsx';

export default class About extends Component {
    render(){
        return (
            <div className="about">
                <div className="container">
                    <Intro />
                    <Bio />
                    <Resume />
                </div>
            </div>
        );
    }
}