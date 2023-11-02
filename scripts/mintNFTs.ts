import { ethers } from "hardhat";
import data from "../interface.json";
import { tokenSol } from "../typechain-types/contracts";



async function main() {
    // constants
    const userAddress = (await ethers.getSigners())[0];
    const contract = await ethers.getContractAt("CuteNFT", data.address);


    // transaction
    const tx = await contract.mint(userAddress, 5);


    await tx.wait();
    // console.log("You now have: ", await contract.balanceOf(userAddress));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});