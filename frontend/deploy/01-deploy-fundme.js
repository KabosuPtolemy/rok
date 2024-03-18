//

// const { deployments, getNamedAccounts } = require("hardhat")

// function deployFunc() {
//   console.log("hi")
// }

// module.exports.default = deployFunc

module.exports = async (hre) => {
  hre.getNamedAccounts() //  these lines are alternative to const {getNamedAccounts, deployments} = hre
  hre.deployments
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  console.log("hi")
}
