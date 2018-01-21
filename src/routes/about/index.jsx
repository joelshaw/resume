import React, { Component } from 'react';

import Intro from '../../containers/Intro.jsx'

export default class About extends Component {
    render(){
        return (
            <div className="about">
                <div className="container">
                    <Intro />
                    <div className="content-brick">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima impedit cumque dolorum veniam incidunt tempore laudantium repudiandae est praesentium possimus sunt placeat esse sequi provident iusto aperiam, officia ex natus!</p>
                    </div>
                </div>
            </div>
        );
    }
}