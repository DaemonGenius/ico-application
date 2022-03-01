import React from "react";

function Account(props) {
  return (
    <>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex-1 min-w-0">
            <h3>Address: {props.defaultAccount}</h3>
            <h3>Balance:</h3>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {props.userBalance} ETH
          </div>
          <div className="items-center text-base font-semibold text-gray-900 dark:text-white">
            {props.userBalance} ETH
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
