import { expect } from "chai";
import { ethers } from "hardhat";

describe("Storage Contract", () => {

    async function deployStorage() {
        const [owner, addr1, addr2] = await ethers.getSigners();

        const storageContract = await ethers.deployContract("Storage");
        await storageContract.waitForDeployment();

        return { storageContract, owner, addr1, addr2 };
    }

    it("function check", async function () {

        const { storageContract } = await deployStorage();

        await storageContract.writeNum(25);

        expect(await storageContract.readNum()).to.equal(25);

    })
})