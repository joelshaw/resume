import React, { Component } from 'react';

import Navigation from '../components/Navigation.jsx';

export default class Intro extends Component {
    render() {
        return (
            <div className="content-brick">
                <div className="header">
                    <h1>Joel Shaw</h1>
                    <h2>A Richmond, VA based developer &amp; photographer.</h2>
                    <Navigation />
                </div>
            </div>
        );
    }
}