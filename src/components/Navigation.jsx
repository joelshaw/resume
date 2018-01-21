import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => (
    <div className="navigation">
        <nav className="navigation__links">
            <Link className="navigation__links-item" to="/">About</Link>
            <Link className="navigation__links-item" to="/projects">Projects</Link>
            <Link className="navigation__links-item" to="/photos">Photography</Link>
            <Link className="navigation__links-item" to="/contact">Contact</Link>
        </nav>
    </div>
);

export default Navigation;