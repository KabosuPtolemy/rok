# General

Run

```
yarn install
```

# 1.Frontend

The frontend is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [Next.js Documentation](https://nextjs.org/docs)

## Getting Started

First, run the development server:

```
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `frontend/pages/index.js`.

## Folders

-public
-pages
-styles
-server

## Hosting

One way of hosting Next.js app is with [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

- [Next.js deployment docs](https://nextjs.org/docs/deployment)

# 2.Backend

## Getting started

To run hardhat node run:

```
yarn hardhat node
```

How to run deployment?

If you want you can run also on different networks. Network list is located in hardhat.config,js. You can replace "localhost" with "hardhat", "goerli_alchemy", "rinkeby_infura". And "deploy.js" with any deployment scripts in ./hardhat/scripts/.

```
yarn hardhat run ./hardhat/scripts/deploy.js --network localhost
```

There will be also another way to deploy scripts (TODO)

## File description:

1.hardhat - this folder contains all the neccesary components in order for hardhat to work. <br>
1.1.artifacts - <br>
1.2.cache-auto created after SC compilation... <br>
1.3.contracts- contains all our smart contracts. <br>
1.4.test- contains all our tests we can custom make before deployment.each SC should have additional test file <br>
1.5.task - additional tasks on top of "yarn hardhat", listed tasks. <br>
2.node\*modules (invisible)- contains all dependencies that are activated with "yarn install" <br>
3.scipts - contains all deployment scipts for smart contracts (SC). each SC should have sepperate deoploy_sc.js file <br>
4.".env" - enviroment with all the sensitive data<br>
5.hardhat.config.js - the most important hardhat file which contains all information in order for it to work

## Todo:

1.test different version compilers in hardhat.config.js.<br>
2.Add bsc mainnet<br>
3.Smth is off with etherscan API, maybe no big deal (see below) searc id:00012 in deploy_simplestorage.js<br>

```
Verifying contract...
Nothing to compile
NomicLabsHardhatPluginError: Failed to send contract verification request.
Endpoint URL: https://api-goerli.etherscan.io/api
Reason: The Etherscan API responded that the address 0xB04D78aC3850E9458eC8A9e90f48AA84a82d5f4b does not have bytecode.
This can happen if the contract was recently deployed and this fact hasn't propagated to the backend yet.
Try waiting for a minute before verifying your contract. If you are invoking this from a script,
try to wait for five confirmations of your contract deployment transaction before running the verification subtask.
```

## Short how-to

### Tests

in order to run tests `yarn hardhat test` <br>
to specify specific file just add path to file: `yarn hardhat test ./hardhat/test/test-deploy.js`<br>

# 3.DeFi

This is something that may become usefull, but not atm. Mainly focuse is for borrowing and lending.

AAVE docs: https://docs.aave.com/hub/
AAVE test enviroment: https://staging.aave.com/
AAVE WETH token contract: 0x27B4692C93959048833f40702b22FE3578E77759

To get WETH use:

```
yarn hardhat run defi-interactions/aaveGetWeth.js
```

## 3.1 Borrow/Lend

- defi-interactions <br>

## 3.2 FlashLoans

## 4.Swap

uniswap v3 docs: https://docs.uniswap.org/protocol/guides/swaps/single-swaps

# HelloWorld

You can run HelloWorld.sol with remix plugin or with hardhat by running this:

```
yarn hardhat run scripts/deploy_helloworld.js --network localhost
yarn hardhat run scripts/deploy_listing_01.js --network rinkeby_infura
```

from this script we should print on webpage this "HiThere.address"

The ABI for interaction with SC is here: hardhat/artifacts/hardhat/contracts/HelloWorld.sol/Hello.json
