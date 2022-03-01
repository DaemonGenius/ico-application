import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import MetaMaskButton from "../Buttons/MetaMask/MetaMask";
import Account from "../Account/Account";
import { useSelector, useDispatch } from "react-redux";
import { LOGGED_IN } from "../../actions";
import { contextSourcesMap } from "tailwindcss/lib/lib/sharedState";

const WalletCardEthers = () => {
  const isLogged = useSelector((state) => state.isLogged);
  const isLoggedUser = useSelector((state) => state.isLogged.data);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(
    useSelector((state) => state.isLogged.data) ?? null
  );
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [provider, setProvider] = useState(null);

  if (isLoggedUser) {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((result) => {
        setConnButtonText("Wallet Connected");
        setDefaultAccount(isLoggedUser);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  
  const connectWalletHandler = () => {
    if (window.ethereum && defaultAccount == null) {
      // set ethers provider
      setProvider(new ethers.providers.Web3Provider(window.ethereum));

      // connect to metamask

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setConnButtonText("Wallet Connected");
          setDefaultAccount(result[0]);
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else if (!window.ethereum) {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  useEffect(() => {
    if (defaultAccount) {
      provider.getBalance(defaultAccount).then((balanceResult) => {
        setUserBalance(ethers.utils.formatEther(balanceResult));
      });
    }
  }, [defaultAccount]);

  return (
    <>
      {defaultAccount ? (
        <Account defaultAccount={defaultAccount} userBalance={userBalance} />
      ) : (
        <div>
          <MetaMaskButton onPress={connectWalletHandler} />
        </div>
      )}

      {errorMessage}
    </>
  );
};

export default WalletCardEthers;
