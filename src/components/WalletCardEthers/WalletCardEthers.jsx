import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import MetaMaskButton from "../Buttons/MetaMask/MetaMask";
import Account from "../Account/Account";
import { useSelector, useDispatch } from "react-redux";
import useMetaMask from "../../hooks/metamask";
import useAccount from "../../hooks/account";
import Web3 from "web3";

const WalletCardEthers = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const { connect, disconnect, isActive, account, shouldDisable, chainId } =
    useMetaMask();

  const  balance = useAccount();

  return (
    <>
      {account ? (
        <Account defaultAccount={account} userBalance={balance} />
      ) : (
        <div>
          <MetaMaskButton />
        </div>
      )}

      {errorMessage}
    </>
  );
};

export default WalletCardEthers;
