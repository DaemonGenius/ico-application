import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "flowbite";
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import { provider } from "react-redux";

import allReducer from "./reducers";
import { Provider } from "react-redux";
import store from "./store/saveToLocalStorage";

import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { MetaMaskProvider } from "./hooks/metamask";
import './polyfill';

function getLibrary(provider, connector) {
  return new Web3(provider);
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MetaMaskProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
