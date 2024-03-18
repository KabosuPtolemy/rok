require("dotenv").config()
require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-etherscan") //for auto-verification
require("./hardhat/tasks/block-number.js") //this adds block-number task to "yarn hardhat"
require("hardhat-gas-reporter") // adding gas-report see gasReporter below
require("solidity-coverage")
require("hardhat-deploy") // gives us deploy function with 1 line
//require("@nomiclabs/hardhat-waffle") // not sure why we importing this

module.exports = {
  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: process.env.ALCHEMY_MAINNET_RPC_URL,
      },
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      //accounts: these are accounts that hardhat provides when running "yarn hardhat node", so we dont specify them
      chainId: 31337,
    },
    goerli_alchemy: {
      url: process.env.ALCHEMY_GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY_GENESIS],
      chainId: 5,
    },
    rinkeby_infura: {
      url: process.env.INFURA_RINKEBY_RPC_URL,
      accounts: [process.env.PRIVATE_KEY_GENESIS],
      chainId: 4,
    },
    sepolia_infura: {
      url: process.env.INFURA_SEPOLIA_RPC_URL,
      accounts: [process.env.PRIVATE_KEY_GENESIS],
      chainId: 11155111,
    },
  },

  solidity: {
    compilers: [
      { version: "0.8.13" },
      { version: "0.8.8" },
      { version: "0.8.6" },
      { version: "0.8.0" },
      { version: "0.7.6" },
      { version: "0.7.3" },
      { version: "0.6.12" },
      { version: "0.6.6" },
      { version: "0.6.0" },
      { version: "0.4.19" },
    ],
  },

  paths: {
    sources: "./hardhat/contracts",
    tests: "./hardhat/test",
    cache: "./hardhat/cache",
    artifacts: "./hardhat/artifacts",
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    enabled: true,
    //outputFile: "gas-report.txt",
    //noColors: true,
    currency: "USD",
    coinmarketcap: process.env.COIN_MARKET_CAP_API,
    token: "BNB", //ETH, BNB, MATIC, AVAX
  },

  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer (LOCAL!)
    },
    feeCollector: {
      default: 1, // this will be our account where we collect fees
    },
    customer1: {
      default: 2, // test customer
    },
    customer1: {
      default: 3, // test customer
    },
  },
}
