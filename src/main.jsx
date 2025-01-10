import React from 'react';
import ReactDOM from 'react-dom/client'
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from './App.jsx';

const ClientID = '1074082586702-c3sf8h7bbb3h14pu0sddji8ike8su5dh.apps.googleusercontent.com'

const Root = () => {
  return(
    <GoogleOAuthProvider clientId= {ClientID} >
      <App />
    </GoogleOAuthProvider>
  );
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Root />
);