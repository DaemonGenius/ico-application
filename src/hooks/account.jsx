import { useWeb3React } from "@web3-react/core";
import { useEffect, useState, useMemo } from "react";
import Steinnegen from "@DaemonGenius/ico/ico-steinnegen/build/contracts/Steinnegen.json";
import Web3 from "web3";
import ganache from "ganache";
import useSteinnegen from "./useSteinnegen";

export default function useAccount() {
  const { account, library } = useWeb3React();
  const [ethBalance, setEthBalance] = useState();
  const [steinBalance, setSteinBalance] = useState();
  const [instance, setInstance] = useState();
  const [utils, setUtils] = useState();

  const web3 = new Web3(ganache.provider());

  useEffect(async () => {
    if (account) {
      try {
        let instance = new library.eth.Contract(
          Steinnegen.abi,
          "0xdb1dC977f52CE6E5fCeaDB5Bd8bB264180d65861",
          {
            from: account, // default from address
            gasPrice: "20000000000", // default gas price in wei, 20 gwei in this case
          }
        );
        setSteinBalance(
          library.utils.fromWei(
            await instance.methods
              .balanceOf('0x63E22bc4650ddfAE706D1f9b92001790A0f9631d')
              .call(),
            "ether"
          )
        );
      } catch (error) {
        console.error(error);
      }

      let val = await library.eth.getBalance(account);
      setEthBalance(library.utils.fromWei(val, "ether"));
    }
  }, [account, library]);

  const values = useMemo(
    () => ([
      ethBalance,
      steinBalance
    ]),
    [ethBalance, steinBalance]
  );

  console.log(values);

  return values;
}
