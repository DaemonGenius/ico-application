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
          "0xd1cc5b72A8571c24c5293BA3B1b3C06435bD5Fdf",
           {
            from: '0xd1cc5b72A8571c24c5293BA3B1b3C06435bD5Fdf', // default from address
            gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        });
        console.log(await instance.methods.name().call());
  
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
