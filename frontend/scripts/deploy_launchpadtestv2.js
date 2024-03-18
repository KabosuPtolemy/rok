const { ethers } = require("hardhat")

async function main() {
  const LaunchpadFactory = await ethers.getContractFactory("LaunchpadTestV2")
  console.log("Deploying contract...")
  const Launchpad = await LaunchpadFactory.deploy()
  await Launchpad.deployed()
  console.log(`Deplyed contract to: ${Launchpad.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    process.error(error)
    process.exit(1)
  })
