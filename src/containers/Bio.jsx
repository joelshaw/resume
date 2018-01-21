import React, { Component } from 'react';

export default class Bio extends Component {
    render() {
        const dates = Math.abs(2005 - new Date().getFullYear());
        return (
            <div className="content-brick">
                <p>Joel is a full stack developer who is proud to call Richmond, VA home. He has nearly {dates} years of experience designing and developer high
quality user interfaces. His professional experience includes agency,
finance, and military.</p>
            </div> 
        );
    }
}