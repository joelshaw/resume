import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import styles from './styles/Styles.css';

import Resume from './components/Resume.jsx';

const RoutedApp = () => (
    <BrowserRouter>
        <Resume />
    </BrowserRouter>
);


ReactDOM.render(<RoutedApp />, document.getElementById('app'));