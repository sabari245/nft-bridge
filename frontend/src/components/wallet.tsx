import { Button } from "./ui/button";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";

export function WalletSection() {
  const { open, close } = useWeb3Modal();

  const { status, isConnected, address } = useAccount();

  return (
    <>
      <h2>Storage Frontend</h2>
      <br />
      <Button onClick={() => open()}>Connect Wallet</Button>
      <br />
      <p>
        <span className="font-bold">Wallet Status</span> {status}
      </p>
      <p>
        <span className="font-bold">Address</span> {isConnected && address}
      </p>
    </>
  );
}
