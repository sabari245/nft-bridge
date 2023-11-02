import { ethers } from "hardhat";
import { writeFileSync } from "fs"

const OUTPUT_FILE = "./interface.json"

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = ethers.parseEther("0.001");
  // const [owner] = await ethers.getSigners()

  const Storage = await ethers.deployContract("CuteNFT", ["CUTIE", "CTE"]);

  const storageInstance = await Storage.waitForDeployment();

  const data = {
    address: await storageInstance.getAddress(),
    abi: JSON.parse(storageInstance.interface.formatJson())
  }

  writeFileSync(OUTPUT_FILE, JSON.stringify(data));

  console.log(
    `Lock with ETH and unlock timestamp ${unlockTime} deployed to ${Storage.target}`
  );
  console.log(`the address and the abi is stored in: \n\t${OUTPUT_FILE}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
