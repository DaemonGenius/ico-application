import React, { Component } from "react";
import { Link } from "react-router-dom";
import useTokenSupply from "../../hooks/useTokenSupply";
import formatCurrency from "../../utils/formatters/currencyFormatter"

const Tokenomics = () => {
  const tokenSaleProgressBar = {
    width: "45%",
  };

  const tokenSaleFund = "720 000.00";
  const tokenSupply = useTokenSupply();

  return (
    <>
      <div className="container mx-auto">
        <div class="p-6 max-w-sm">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              Tokenomics
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            TOKEN INFO - BLOCKS We designed a brand-new cool design and lots of
            features, the latest version of the template supports advanced block
            base scenarios, and more.
          </p>
        </div>
        <div className="flex flex-row">
          <div className="basis-1/2">
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden ">
                    <table class="min-w-full">
                      <thead class="">
                        <tr>
                          <th
                            colSpan={2}
                            scope="col"
                            class="py-3 px-6 text-2xl font-thin tracking-wider text-center text-blue-700 uppercase dark:text-blue-400"
                          >
                            Sales Information
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b ">
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black">
                            Public Sale Starts
                          </td>
                          <td class="py-4 px-6 text-sm font-thin text-gray-900 whitespace-nowrap dark:text-black">
                            15th Nov 2022 12:00 GMT+2
                          </td>
                        </tr>

                        <tr class="border-b ">
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black">
                            Public Sale Ends
                          </td>
                          <td class="py-4 px-6 text-sm font-thin text-gray-900 whitespace-nowrap dark:text-black">
                            14th Dec 2022 12:00 GMT+2
                          </td>
                        </tr>

                        <tr class="border-b ">
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black">
                            Total Token Supply
                          </td>
                          <td class="py-4 px-6 text-sm font-thin text-gray-900 whitespace-nowrap dark:text-black">
                           { formatCurrency(tokenSupply) }
                          </td>
                        </tr>

                        <tr class="border-b ">
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black">
                            Tokens Allocated for ICO
                          </td>
                          <td class="py-4 px-6 text-sm font-thin text-gray-900 whitespace-nowrap dark:text-black">
                            50 000 000
                          </td>
                        </tr>

                        <tr class="border-b ">
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black">
                            Soft Cap
                          </td>
                          <td class="py-4 px-6 text-sm font-thin text-gray-900 whitespace-nowrap dark:text-black">
                            $1.75m
                          </td>
                        </tr>

                        <tr class="border-b ">
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black">
                            Hard Cap
                          </td>
                          <td class="py-4 px-6 text-sm font-thin text-gray-900 whitespace-nowrap dark:text-black">
                            $4.75m
                          </td>
                        </tr>

                        <tr class="border-b ">
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black">
                            Token Value
                          </td>
                          <td class="py-4 px-6 text-sm font-thin text-gray-900 whitespace-nowrap dark:text-black">
                            1 ETH = 1,000 STEIN
                          </td>
                        </tr>
                        <tr class="border-b ">
                          <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-black">
                            Accepted
                          </td>
                          <td class="py-4 px-6 text-sm font-thin text-gray-900 whitespace-nowrap dark:text-black">
                            <span class="text-gray-900 bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2">
                              <svg
                                class="w-4 h-4 mr-2 -ml-1 text-[#626890]"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="ethereum"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
                                ></path>
                              </svg>
                              ETH
                            </span>
                            <span class="text-white bg-[#FF9119] focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#FF9119]/40 mr-2 mb-2">
                              <svg
                                class="mr-2 -ml-1 w-4 h-4"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="bitcoin"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M504 256c0 136.1-111 248-248 248S8 392.1 8 256 119 8 256 8s248 111 248 248zm-141.7-35.33c4.937-32.1-20.19-50.74-54.55-62.57l11.15-44.7-27.21-6.781-10.85 43.52c-7.154-1.783-14.5-3.464-21.8-5.13l10.93-43.81-27.2-6.781-11.15 44.69c-5.922-1.349-11.73-2.682-17.38-4.084l.031-.14-37.53-9.37-7.239 29.06s20.19 4.627 19.76 4.913c11.02 2.751 13.01 10.04 12.68 15.82l-12.7 50.92c.76 .194 1.744 .473 2.829 .907-.907-.225-1.876-.473-2.876-.713l-17.8 71.34c-1.349 3.348-4.767 8.37-12.47 6.464 .271 .395-19.78-4.937-19.78-4.937l-13.51 31.15 35.41 8.827c6.588 1.651 13.05 3.379 19.4 5.006l-11.26 45.21 27.18 6.781 11.15-44.73a1038 1038 0 0 0 21.69 5.627l-11.11 44.52 27.21 6.781 11.26-45.13c46.4 8.781 81.3 5.239 95.99-36.73 11.84-33.79-.589-53.28-25-65.99 17.78-4.098 31.17-15.79 34.75-39.95zm-62.18 87.18c-8.41 33.79-65.31 15.52-83.75 10.94l14.94-59.9c18.45 4.603 77.6 13.72 68.81 48.96zm8.417-87.67c-7.673 30.74-55.03 15.12-70.39 11.29l13.55-54.33c15.36 3.828 64.84 10.97 56.85 43.03z"
                                ></path>
                              </svg>
                              BTC
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden ">
                    <div
                      scope="col"
                      class="py-3 px-6 text-2xl font-thin tracking-wider text-center text-blue-700 uppercase dark:text-blue-400"
                    >
                      Token Sale Stage End In
                    </div>
                    <div>
                      <div className="py-3 px-6">
                        <div class="mb-3 font-normal text-gray-700 dark:text-black">
                          <div
                            scope="col"
                            class=" text-2xl font-thin tracking-wider text-center text-blue-700 uppercase dark:text-blue-400"
                          >
                            $ {tokenSaleFund}
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-200">
                          <div
                            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                            style={tokenSaleProgressBar}
                          >
                            45%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;

