import { ethers } from "hardhat";
import data from "../interface.json";

const polygonContractAddress = "0x4fA98fCB3380Ab9381B05aA0708b4D5204b7BbaB";
async function main() {
    // constants
    const userAddress = (await ethers.getSigners())[0];
    console.log(userAddress.address)
    const contract = await ethers.getContractAt(data.abi, polygonContractAddress);

    // for (let i = 0; i < 5; i++) {
    //     let prompt = await contract.connect(userAddress).prompt(i);
    //     console.log("The prompt for ", i, "th nft is ", prompt);

    //     let uri = await contract.connect(userAddress).tokenURI(i);
    //     console.log(`The token URI of ${i}th nft is ${uri}`);
    // }

    console.log("you now have: " + await contract.balanceOf(userAddress) + " tokens")
    // const tx = await contract.setPrompt("Image of a Cute Cat NFT ima", 2);
    // await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});