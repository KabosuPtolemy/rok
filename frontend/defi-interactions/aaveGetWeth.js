const { getNamedAccounts, ethers, network } = require("hardhat") //more info: https://github.com/wighawag/hardhat-deploy#configuration  ... get access to hardhat.config.js
const { networkConfig } = require("../helper-hardhat-config") // more network config options

const AMOUNT = ethers.utils.parseEther("0.01")

async function getWeth() {
  const { deployer } = await getNamedAccounts() // Fetch the accounts from hardhat.config.js
  //call the deposit function on the weth contract
  //to interact with the contract you need -> ABI and CONTRACT ADDRESS!!!
  //here we will get ABI from ./hardhat/contracts/interfaces/IWeth.sol and Mainnet WETH address: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
  const iWeth = await ethers.getContractAt(
    "IWeth",
    networkConfig[network.config.chainId].wethToken,
    deployer
  ) // Allows to get a contract for a specific contract address https://hardhat.org/hardhat-runner/plugins/nomiclabs-hardhat-ethers#helpers

  const txResponse = await iWeth.deposit({ value: AMOUNT }) //deposit is from IWeth.sol interface
  await txResponse.wait(1) //waitihng 1 block confrimation
  const wethBalance = await iWeth.balanceOf(deployer) //balance of is from IWeth.sol interface
  console.log(`The WETH balance is ${wethBalance.toString()}`) //toString() comes from Javascript
}

//export function
module.exports = { getWeth, AMOUNT }

//Script run:
// async function main() {
//   await getWeth()
//   const { deployer } = await getNamedAccounts()
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })
