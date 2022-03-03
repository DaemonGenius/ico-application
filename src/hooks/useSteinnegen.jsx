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
          "0x117c5937465832f8180DDaEAf3Af302570CccA2c",
          {
            from: "0x06fE574C77EA8E2dD17B69bc09853B49EE97Ad8b", // default from address
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
