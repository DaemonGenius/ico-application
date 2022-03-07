import React, { useState, useEffect } from "react";
import useSteinnegen from "./useSteinnegen";

export default function useTokenSupply() {
  const [totalSupply, setTotalSupply] = useState();

  let instance = useSteinnegen()[0];
  let utils = useSteinnegen()[1];

  useEffect(async () => {
    try {
      console.log("asd");
      console.log(
        await instance.methods
          .balanceOf("0x14607953Cf74fC71CD1ACD471b326bD947a864E9")
          .call()
      );

      setTotalSupply(
        utils.fromWei(await instance.methods.totalSupply().call(), "ether")
      );
    } catch (error) {
      console.error(error);
    }
  }, [instance]);

  return totalSupply;
}
