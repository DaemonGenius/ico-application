import React, { useEffect, useState } from "react";
import Vault from "@DaemonGenius/ico/ico-steinnegen/build/contracts/Vault.json";
import { useWeb3React } from "@web3-react/core";

function useVault() {
  const { account, library } = useWeb3React();
  const [instance, setInstance] = useState();
  const [utils, setUtils] = useState();

  useEffect(async () => {
    if (account) {
      try {
        let lib = new library.eth.Contract(
          Vault.abi,
          "0x63E22bc4650ddfAE706D1f9b92001790A0f9631d",
          {
            from: '0x00a7718EE2cA322bE6Da3E3aC073b743e39399c1', // default from address
            gasPrice: "20000000000", // default gas price in wei, 20 gwei in this case
          }
        );


        console.log(lib)

        setInstance(lib);
        setUtils(library.utils);
      } catch (error) {
        console.error(error);
      }
    }
  }, [account, library]);

  return [instance];
}

export default useVault;
