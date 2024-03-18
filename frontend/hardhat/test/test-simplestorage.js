const { ethers } = require("hardhat")
const { expect, assert } = require("chai")
//testing can be done with "assert" and "expect" they do the same thing
describe("SimpleStorage", function () {
  //we define it here so we could access the numbers with it() function. And its not const because they will change
  let simpleStorage
  let simpleStorageFactory

  beforeEach(async function () {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })

  //Current function test--------------------------------------------
  it("Should star with a favourite number 0", async function () {
    const currentValue = await simpleStorage.retrieve() //this will give BigNumber thats why we convert it with .toString() below
    const expectedValue = "0"

    assert.equal(currentValue.toString(), expectedValue)
  })

  //Update function test--------------------------------------------
  it("Should update when we call store", async function () {
    const expectedUpdateValue = "7"
    const updatedValue = await simpleStorage.store(expectedUpdateValue)
    await updatedValue.wait(1) //wait 1 block confrimation
    const currentValue = await simpleStorage.retrieve() //retrieve the number again
    assert.equal(currentValue.toString(), expectedUpdateValue)
  })
})
