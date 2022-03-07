import React, { useEffect, useState } from "react";
import Steinnegen from "@DaemonGenius/ico/ico-steinnegen/build/contracts/Steinnegen.json";
import { useWeb3React } from "@web3-react/core";

function useSteinnegen() {
  const { account, library } = useWeb3React();
  const [instance, setInstance] = useState();
  const [utils, setUtils] = useState();

  useEffect(async () => {
    if (account) {
      try {
        let lib = new library.eth.Contract(
          Steinnegen.abi,
          "0xdb1dC977f52CE6E5fCeaDB5Bd8bB264180d65861",
          {
            from: '0x00a7718EE2cA322bE6Da3E3aC073b743e39399c1', // default from address
            gasPrice: "20000000000", // default gas price in wei, 20 gwei in this case
          }
        );

        setInstance(lib);
        setUtils(library.utils);
        
      } catch (error) {
        console.error(error);
      }
    }
  }, [account, library]);

  return [instance, utils];
}

export default useSteinnegen;
