// 1) import the react and react DOM libraries

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 2) get a reference to the div with ID ROOT

const el = document.getElementById('root');

// 3) tell react to make control of that element

const root =ReactDOM.createRoot(el);

// 4) create a component


// 5) show the component on the screen

root.render(<App/>);