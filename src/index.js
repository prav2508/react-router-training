import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './components/about';
import Expense from './components/expense';
import Invoice from './components/invoice';
import Dashboard from './components/dashboard';
import Hoc from './components/hoc';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"/>} />
        <Route path="/home" element={<App />} >
            <Route path="expense" element={<Expense/>}/>
            <Route path="expense/:expense" element={<Expense/>}/>
            <Route path="invoice" element={<Invoice/>}/>
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/service" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/hoc" element={<Hoc />} />

        <Route path="*"
        element={
          <h1>Sorry, No page found!!!</h1>
        }/>

      </Routes>

    </BrowserRouter>


  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
