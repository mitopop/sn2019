import React from 'react';
import ReactDOM from 'react-dom';

// import './main.css';
import './styles/fonts.css'

import RootComponent from './containers/RootComponent'

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<RootComponent/>, container);
