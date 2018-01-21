import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import About from '../routes/about/index.jsx';
import Projects from '../routes/projects/index.jsx';
import Photos from '../routes/photography/index.jsx';

export default class Resume extends 
Component {
    render(){
        return (
            <div className="resume-app">
                <div className="resume-app__view">
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/photos" component={Photos} />
                    </Switch>
                </div>
            </div>
        );
    }
}