import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';
import { sum } from './03/03';
import { User } from './05/06-callback';

var a = sum

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<User    />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

