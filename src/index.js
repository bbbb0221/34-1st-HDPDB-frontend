import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import '../src/styles/reset.scss';
import '../src/styles/common.scss';
import '../src/styles/variables.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
