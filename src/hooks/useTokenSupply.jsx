import React, { useState, useEffect } from "react";
import useSteinnegen from "./useSteinnegen";
import useVault from "./useVault";

export default function useTokenSupply() {
  const [totalSupply, setTotalSupply] = useState();

  let instance = useSteinnegen()[0];
  let utils = useSteinnegen()[1];
  let vault = useVault()[0];

  useEffect(async () => {
    try {
      console.log("asd");

      let info = await vault;
      console.log(info);

      setTotalSupply(
        utils.fromWei(await instance.methods.totalSupply().call(), "ether")
      );
    } catch (error) {
      console.error(error);
    }
  }, [instance]);

  return totalSupply;
}
