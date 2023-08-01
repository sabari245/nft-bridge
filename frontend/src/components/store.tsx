import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { usePublicClient, useWalletClient } from "wagmi";
import data from "./interface.json";
import { useState } from "react";

export default function StoreSection() {
  const [value, setValue] = useState<number>();

  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

  async function writeNumber() {
    if (!walletClient) {
      console.log("wallets not connected");
      return;
    }

    const [address] = await walletClient.getAddresses();

    const { request } = await publicClient.simulateContract({
      abi: data.abi,
      address: `0x${data.address.substring(2)}`,
      functionName: "writeNum",
      args: [value],
      account: address,
    });

    const hash = await walletClient.writeContract(request);
  }

  return (
    <>
      <p>Save the Number</p>
      <br />
      <Input
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        placeholder="Enter the number to store"
        type="number"
      />
      <br />
      <Button onClick={writeNumber}>Store</Button>
    </>
  );
}
