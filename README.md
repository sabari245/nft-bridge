# NFT Bridge

This repo contains code to bridge NFTs from goerli to mumbai testnet. This repo contains the simple smartcontract of a ERC721A ( NFT batch minting ) contract. It also contains scripts for bridging the tokens. This project uses fxbridge to bridge the tokens from goerli to mumbai testnet

## configurations

To run the project you need to setup ```PRIVATE_KEY``` environment variable in a ```.env``` file.
also make sure to update the contract addresses and wallet addresses in the script files

> make sure to get goerli ethereum from any faucet before execution

to execute a script file use the following command

```shell
npx hardhat run scripts/<script>.ts --network <network_name>
```

you can configure the network in the ```hardhat.config.ts``` file

## DISCLAIMER

THIS REPO IS CREATED FOR THE METACRAFTERS PROJECT SUBMISSION. DO NOT USE IT FOR PRODUCTION UNDER ANY CIRCUMSTANCES