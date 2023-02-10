import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Auth0Provider
      domain="dev-moxu5a1rgwq0ulz2.us.auth0.com"
      clientId="3RdL39J5hkVgkGmczqiFjR39iOUcksZQ"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
);
