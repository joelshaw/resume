import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from '../routes/about/index.jsx';

export default class Resume extends 
Component {
    render(){
        return (
            <div className="resume-app">
                <div className="resume-app__view">
                    <Switch>
                        <Route exact path="/" component={About} />
                    </Switch>
                </div>
            </div>
        );
    }
}