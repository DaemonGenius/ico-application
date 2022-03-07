import React from "react";

function Account(props) {
  return (
    <>
      <div className="float-right items-center text-base font-semibold text-gray-900 dark:text-white">
        <h3>Balance:</h3>
        <div className="inline-flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white">
          <span className="flex-1 ml-3 whitespace-nowrap">ETH:</span>
          <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
            {props.ethBalance}
          </span>
        </div>
        <div className="inline-flex  items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white">
          <span className="flex-1 ml-3 whitespace-nowrap">STEIN:</span>
          <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
            {props.steinBalance}
          </span>
        </div>
      </div>
    </>
  );
}

export default Account;
