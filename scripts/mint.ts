import { ethers } from "hardhat";
import data from "../interface.json";

const NFTURIs = [
    "QmVpaMbNfy98f3zR7M8UuJbH4K1XFFjH6D9JsbX6B75EJo",
    "QmXgMWcQb4ncwHq5xSMNhri2c71yZiZYvqQ7pHEcEU44DK",
    "Qmdw8JEcq3U17uLawaZbnuKv5UmnP1kndd86e5Ktxoxkey",
    "QmNMiRmz1QhLkEdzL16M3pQ8Qf229zwpqETf7TpQ9By1AB",
    "QmUfSAUkPxV6VYKzoJHDKNEtK2szKA3SRHsXAr9LxjjFPj"
]

async function main() {
    // constants
    const userAddress = "0xCcFd17175A573EA4Ddf7779C79d05Cee09733476";
    const contract = await ethers.getContractAt(data.abi, data.address);


    // transaction
    console.log("transaction started")
    let tx = await contract.mint(userAddress, 5);


    await tx.wait();
    console.log("transaction ended")

    for (let i = 0; i < 5; i++) {
        console.log("updating the prompt");
        tx = await contract.setPrompt("Image of a Cute Cat NFT image", i);
        await tx.wait();

        console.log("updating the NFT URI")
        tx = await contract.setURI(NFTURIs[i], i)
        await tx.wait();
    }

    console.log("You now have: ", await contract.balanceOf(userAddress));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});