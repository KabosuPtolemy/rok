const { ethers, run, network } = require("hardhat")

async function main() {
  //deployment:
  const HiThereFactory = await ethers.getContractFactory("Hello")
  console.log("Deploying contract...")
  const HiThere = await HiThereFactory.deploy()
  await HiThere.deployed()
  console.log(`Deplyed contract to: ${HiThere.address}`)
  //interact
  //get current number:
  const currentValue = await HiThere.retrieve()
  console.log(`Current Value is: ${currentValue}`)
  // //
  // Update the current value
  const transactionResponse = await HiThere.store(1)
  await transactionResponse.wait(1)
  const updatedValue = await HiThere.retrieve()
  console.log(`Updated Value is: ${updatedValue}`)
  //
  //get corresponding message
  const message = await HiThere.nameToString()
  console.log(`the message is: ${message}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    process.error(error)
    process.exit(1)
  })
