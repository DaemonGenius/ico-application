import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import Steinnegen from "@DaemonGenius/ico/ico-steinnegen/build/contracts/Steinnegen.json";
import Web3 from "web3";
import ganache from "ganache"

export default function useAccount() {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState();
  
  const web3 = new Web3(ganache.provider());

  useEffect(async () => {
    if (account) {
      try {
        // get contract instance
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = Steinnegen.networks[networkId];

        let instance = new web3.eth.Contract(
          Steinnegen.abi,
          account,
        );
        console.log(await instance);
  
      } catch (error) {
        console.error(error);
      }
   

      let val = await library.eth.getBalance(account);
      console.log(await library);
      setBalance(library.utils.fromWei(val, "ether"));
    }
  }, [account, library]);

  return balance;
}
