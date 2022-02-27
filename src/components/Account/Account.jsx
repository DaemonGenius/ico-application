import React from "react";

function Account(props) {

  return (
    <>
      <div className="accountDisplay">
        <h3>Address: {props.defaultAccount}</h3>
      </div>
      <div className="balanceDisplay">
        <h3>Balance: {props.userBalance}</h3>
      </div>
    </>
  );
}

export default Account;
