import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import StateEx from './components/StateEx';
import Eventhandle from './components/Eventhandle';
import Form from './components/Form';
import Formimage from './components/Formimage';
import ConditionalRender from './components/ConditionalRender';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
  <h3>useState</h3>
    <StateEx />
    <br></br>
    <h3>Event Handling </h3>
    <Eventhandle />
    <Form />
    <Formimage />
    <ConditionalRender />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
