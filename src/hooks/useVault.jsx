import React, { useEffect, useState } from "react";
import TokenSale from "@DaemonGenius/ico/ico-steinnegen-coin/build/contracts/VaultFactory.json";
import { useWeb3React } from "@web3-react/core";

function useVault() {
  const { account, library } = useWeb3React();
  const [instance, setInstance] = useState();
  const [utils, setUtils] = useState();

  useEffect(async () => {
    if (account) {
      try {
        let lib = new library.eth.Contract(
          TokenSale.abi,
          "0x83B4E9d1a44829Dd2DcbA412B023A0225BEb220E",
          {
            from: account, // default from address
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

  return [instance];
}

export default useTokenSale;
