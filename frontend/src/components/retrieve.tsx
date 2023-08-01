import { useState } from "react";
import { Button } from "./ui/button";
import { usePublicClient } from "wagmi";
import data from "./interface.json";

export default function RetrieveSection() {
  const [value, setValue] = useState<number>();
  const publicClient = usePublicClient();

  async function readNumber() {
    const storage = await publicClient.readContract({
      abi: data.abi,
      address: `0x${data.address.substring(2)}`,
      functionName: "readNum",
    });

    console.log(storage);

    setValue(parseInt(`${storage}`));
  }

  return (
    <>
      <p>Retrieve the number</p>
      <br />
      <Button onClick={() => readNumber()}>Retrieve</Button>
      <br />
      <p>
        The stored number is <span className="font-bold">{value}</span>
      </p>
    </>
  );
}
