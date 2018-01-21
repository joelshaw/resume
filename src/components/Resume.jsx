import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from '../routes/about/index.jsx';
import Navigation from './navigation.jsx';

export default class Resume extends 
Component {
    render(){
        return (
            <div className="resume-app">
                <Navigation />
                <div className="resume-app__view">
                    <Switch>
                        <Route exact path="/" component={About} />
                    </Switch>
                </div>
            </div>
        );
    }
}