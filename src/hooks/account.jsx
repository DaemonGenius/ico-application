import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";

export default function useAccount() {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState();

  useEffect(async () => {
    if (account) {
       let val = await library.eth.getBalance(account);
       setBalance(library.utils.fromWei(val, 'ether'));
    }
  }, [account, library])

  return balance;
}
