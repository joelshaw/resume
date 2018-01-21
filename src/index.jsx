import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import styles from './styles/Styles.css';

import App from './containers/App.jsx';

const RoutedApp = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


ReactDOM.render(<RoutedApp />, document.getElementById('app'));