import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => (
    <div className="navigation">
        <div className="container">
            <nav className="navigation__links">
                <Link className="navigation__links-item" to="/contact">Contact</Link>
            </nav>
        </div>
    </div>
);

export default Navigation;