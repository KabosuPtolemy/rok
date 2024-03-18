const { hexStripZeros } = require("ethers/lib/utils")
const { task } = require("hardhat/config") //this is where tasks are located

task("block-number", "Print the current block number").setAction(
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber()
    console.log(`Current block number is: ${blockNumber}`)
  }
)

module.exports = {}
