import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '@containers/Login';
import Register from '@containers/Register';
import App from '@containers/App';

import './index.css';

// import Register from './containers/Register';
// import { startVconsole } from './utils';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
);

// 启动 vconsole
// startVconsole();