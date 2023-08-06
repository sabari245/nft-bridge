# Web 3 Starter kit

This project is a starter kit for simple web3 projects. I contains a custom deploy script that write the address and abi to `/frontend/src/components/interface.json`. It also contains a simple storage smart contract

This is done as a part of **intermediate EVM course** in metacrafters

It also contains a frontend folder made with next js and it uses web3modal, wagmi and viem to communicate with the blockchain

## hardhat configuration

To run the local node run the following command

```shell
npx hardhat node
```

> note that this will create a different set of wallets every single time. So the wallet has to be configured before every use. to get around this use some other test nets

To run the test scripts run the following command

```shell
npx hardhat test
```

To run the deploy script in local node

```shell
npx hardhat run scripts/deploy.ts --network localhost
```

## frontend configuration

make sure to install the packages with `npm i` before running the frontend

rename the `.env.example` to `.env` and update the variables value.

> get your project id from https://cloud.walletconnect.com/

To update the networks, go to `/frontend/src/app/page.tsx` and update the `chains` array
