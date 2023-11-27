import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '@containers/Login';
import Register from '@containers/Register';
import App from '@containers/App';
import { CxtProvider } from '@utils/context';

import './index.css';
import Tweets from '@containers/Tweets';

// import Register from './containers/Register';
// import { startVconsole } from './utils';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <CxtProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="tweets" element={<Tweets />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CxtProvider>

  </React.StrictMode>,
);

// 启动 vconsole
// startVconsole();
