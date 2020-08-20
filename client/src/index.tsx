import React from 'react';
import ReactDOM from 'react-dom';
import 'framework7-icons';
import { UserProvider } from './contexts/user';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
