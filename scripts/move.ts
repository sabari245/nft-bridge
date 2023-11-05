import { ethers } from "hardhat";
import data from "../interface.json";
import bridgeABIData from "../fxRootContractABI.json"

const bridgeAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";

// const userAddress = "0xCcFd17175A573EA4Ddf7779C79d05Cee09733476";

async function main() {
    // constants
    const userAddress = (await ethers.getSigners())[0];
    console.log(userAddress.address)
    const contract = await ethers.getContractAt(data.abi, data.address);

    const bridgeContract = await ethers.getContractAt(bridgeABIData, bridgeAddress);

    for (let i = 0; i < 5; i++) {
        console.log("approving ", i);
        const approveTx = await contract.approve(bridgeAddress, i);
        await approveTx.wait();
    }
    console.log("token approved");


    for (let i = 0; i < 5; i++) {
        console.log("depositing", i);
        const depositTx = await bridgeContract.deposit(data.address, userAddress, i, "0x6556");
        await depositTx.wait();
    }

    console.log("token deposited");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});