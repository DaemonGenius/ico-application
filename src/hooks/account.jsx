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
     
        let instance = new library.eth.Contract(
          Steinnegen.abi,
          "0xd1cc5b72A8571c24c5293BA3B1b3C06435bD5Fdf",
           {
            from: "0x06fE574C77EA8E2dD17B69bc09853B49EE97Ad8b", // default from address
            gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
        });
        console.log(await instance.methods.name().call());
        console.log(await instance.methods.symbol().call());
        console.log(await instance.methods.totalSupply().call());
        console.log(library.utils.fromWei(await instance.methods.balanceOf("0x482f80AC8C15c450fC866F17d9faC1003eB21a06").call(), "ether"));
        // await instance.methods.approve("0x06fE574C77EA8E2dD17B69bc09853B49EE97Ad8b", 200)
        // await instance.methods.approve("0x482f80AC8C15c450fC866F17d9faC1003eB21a06", 200)
        // await instance.methods.allowance("0x06fE574C77EA8E2dD17B69bc09853B49EE97Ad8b", "0x482f80AC8C15c450fC866F17d9faC1003eB21a06");
     

      // let receipt = await instance.methods.transfer("0x482f80AC8C15c450fC866F17d9faC1003eB21a06", 2000).send();

      // console.log(receipt)
        
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
