import React, { Component } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import logo from "../../../applicationLogo.svg";
import "../../../App.css";
import WalletCardEthers from "../../WalletCardEthers/WalletCardEthers"

export default class Layout extends Component {
  render() {
    return (
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li>
          <Link
            to="/"
            className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Participate"
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Participate
          </Link>
        </li>
        <li>
          <Link
            to="/Tokenomics"
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Tokenomics
          </Link>
        </li>
        <li>
          <Link
            to="/Staking"
            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            Staking
          </Link>
        </li>
        <li>
          <Link
            to="/YieldFarming"
            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Yield Farming
          </Link>
        </li>
        <li>
          <Link
            to="/Dex"
            className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            DEX
          </Link>
        </li>
        <li>
          <WalletCardEthers />
        </li>
      </ul>
    );
  }
}
