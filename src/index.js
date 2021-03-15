import './sass/main.scss';

import React from 'react';
import {render} from 'react-dom';

import App from './react/App.jsx';


render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

