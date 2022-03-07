import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import useTokenSupply from "../../hooks/useTokenSupply";
import formatCurrency from "../../utils/formatters/currencyFormatter";

const ICO = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="p-6 max-w-sm">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Setup ICO
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Create ICO
          </p>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div id="dapp" className="container"></div>
            <div className="flex flex-col">
              <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  className="flex flex-wrap -mb-px"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  <li className="mr-2" role="presentation">
                    <button
                      className="active first-line:inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                      id="new-wallet-tab"
                      data-tabs-target="#new-wallet"
                      type="button"
                      role="tab"
                      aria-controls="new-wallet"
                      aria-selected="true"
                    >
                      Create Vault
                    </button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button
                      className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300 "
                      id="topup-tab"
                      data-tabs-target="#topup"
                      type="button"
                      role="tab"
                      aria-controls="topup"
                      aria-selected="false"
                    >
                      Topup
                    </button>
                  </li>
                  <li className="mr-2" role="presentation">
                    <button
                      className="inline-block py-4 px-4 text-sm font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                      id="claim-tab"
                      data-tabs-target="#claim"
                      type="button"
                      role="tab"
                      aria-controls="claim"
                      aria-selected="false"
                    >
                      Claim
                    </button>
                  </li>
                </ul>
              </div>
              <div id="myTabContent">
                <div
                  className=" p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                  id="new-wallet"
                  role="tabpanel"
                  aria-labelledby="new-wallet-tab"
                >
                  <div className="row bg-primary text-white text-sm-center ">
                    <div className="col-12">
                      <h3>Create Wallet Form</h3>
                    </div>
                    <form id="create-wallet-form">
                      <div className="row">
                        <div className="relative z-0 mb-6 w-full group">
                          <input
                            id="ethereumAddress"
                            type="text"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label
                            htmlFor="ethereumAddress"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            Receiver Address
                          </label>
                        </div>

                        <div className="relative z-0 mb-6 w-full group">
                          <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                              <svg
                                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <input
                              datepicker='true'
                              datepicker-format="mm/dd/yyyy"
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Select date"
                            />
                          </div>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                          <input
                            id="etherAmount"
                            type="number"
                            min="0"
                            step="0.001"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            required
                          />
                          <label
                            htmlFor="etherAmount"
                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                          >
                            ETH amount
                          </label>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block text-white"
                      >
                        Create Wallet
                      </button>
                    </form>
                  </div>
                </div>
                <div
                  className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                  id="topup"
                  role="tabpanel"
                  aria-labelledby="topup-tab"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{" "}
                    <strong className="font-medium text-gray-800 dark:text-white">
                      Dashboard tab's associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </div>
                <div
                  className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                  id="claim"
                  role="tabpanel"
                  aria-labelledby="claim-tab"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{" "}
                    <strong className="font-medium text-gray-800 dark:text-white">
                      Settings tab's associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ICO;
