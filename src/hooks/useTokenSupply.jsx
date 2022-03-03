import React, { useState, useEffect } from "react";
import Steinnegen from "@DaemonGenius/ico/ico-steinnegen/build/contracts/Steinnegen.json";
import { useWeb3React } from "@web3-react/core";

export default function useTokenSupply() {
  const { account, library } = useWeb3React();
  const [totalSupply, setTotalSupply] = useState();

  useEffect(async () => {
    if (account) {
      try {
        let instance = new library.eth.Contract(
          Steinnegen.abi,
          "0x117c5937465832f8180DDaEAf3Af302570CccA2c",
          {
            from: "0x06fE574C77EA8E2dD17B69bc09853B49EE97Ad8b", // default from address
            gasPrice: "20000000000", // default gas price in wei, 20 gwei in this case
          }
        );
        
        setTotalSupply(library.utils.fromWei(await instance.methods.totalSupply().call(), "ether"));
      } catch (error) {
        console.error(error);
      }
    }
  }, [account, library]);

  return totalSupply;
}
