const { BigNumber, utils } = require("ethers");
const hardhat = require("hardhat");
async function main() {
  const OKToken = await hardhat.ethers.getContractFactory("OKToken");
  const oktoken = await OKToken.deploy();
  await oktoken.deployed();
  console.log("OKToken deployed to address: " + oktoken.address);
  const OKVendor = await hardhat.ethers.getContractFactory("OKVendor");
  const okvendor = await OKVendor.deploy(oktoken.address);
  console.log("OKVendor deployed to address: " + okvendor.address);
  await oktoken.deployed();
  // Transfer oktokens to vendor
  await oktoken.functions.transfer(okvendor.address, utils.parseEther("10000"));
  console.log("Tokens transferred to OKVendor");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
