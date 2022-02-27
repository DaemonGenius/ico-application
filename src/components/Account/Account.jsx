import React from "react";

function Account(props) {

  return (
    <>
      <div className="text-sm font-medium text-gray-900 truncate dark:text-white">
        <h3>Address: {props.defaultAccount}</h3>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
        <h3>Balance: {props.userBalance}</h3>
      </div>
    </>
  );
}

export default Account;
