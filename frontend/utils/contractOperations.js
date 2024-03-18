import { ethers } from "ethers"

import {
  address_lpTestv2,
  abi_lpTestv2,
  floorPriceTest,
} from "../components/launchpad/test/constantsTest.js"

import {
  address_Listing_01,
  abi_Listing_01,
  floorPrice_Listing_01,
} from "../components/launchpad/test/constants_Listing_01.js"

import {
  address_Listing_02,
  abi_Listing_02,
  floorPrice_Listing_02,
} from "../components/launchpad/test/constants_Listing_02.js"

import {
  address_Listing_03,
  abi_Listing_03,
  floorPrice_Listing_03,
} from "../components/launchpad/test/constants_Listing_03.js"

import {
  address_Listing_04,
  abi_Listing_04,
  floorPrice_Listing_04,
} from "../components/launchpad/test/constants_Listing_04.js"

// #####Listing_01####
export async function getBalanceL1() {
  let Launchpad_Listing_01 = new ethers.Contract(
    address_Listing_01,
    abi_Listing_01,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  let Balance = await Launchpad_Listing_01.getBalance()
  console.log(`The Balance of the contract is: ${Balance}`)
}

export async function getOwnerL1() {
  let Launchpad_Listing_01 = new ethers.Contract(
    address_Listing_01,
    abi_Listing_01,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  let Owner = await Launchpad_Listing_01.getOwner()
  console.log(`The owner of the smart contract is ${Owner}`)
}

export async function fundL1() {
  let Launchpad_Listing_01 = new ethers.Contract(
    address_Listing_01,
    abi_Listing_01,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  console.log(`Funding with floor price of: ${floorPrice_Listing_01} ETH`)
  try {
    const transationResponse = await Launchpad_Listing_01.fund({
      value: ethers.utils.parseEther(floorPrice_Listing_01),
    })
  } catch (error) {
    console.log(error)
  }
}

export async function getContractAddressL1() {
  let Launchpad_Listing_01 = new ethers.Contract(
    address_Listing_01,
    abi_Listing_01,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  console.log(`The contract address is: ${Launchpad_Listing_01.address}`)
}

export async function withdrawL1() {
  let Launchpad_Listing_01 = new ethers.Contract(
    address_Listing_01,
    abi_Listing_01,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  const amount = document.getElementById("withdraw-amount").value
  await Launchpad_Listing_01.withdraw(amount)
  console.log(`The contract funds are withdrawed to owners address`)
}

export async function getFunderL1() {
  let Launchpad_Listing_01 = new ethers.Contract(
    address_Listing_01,
    abi_Listing_01,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  const funderid = document.getElementById("funder-id").value
  const funderAddress = await Launchpad_Listing_01.getFunder(funderid)
  console.log(`The Funder address of index ${funderid} is ${funderAddress}`)
}
// #####Listing_02####
export async function getBalanceL2() {
  let Launchpad_Listing_02 = new ethers.Contract(
    address_Listing_02,
    abi_Listing_02,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  let Balance = await Launchpad_Listing_02.getBalance()
  console.log(`The Balance of the contract is: ${Balance}`)
}

export async function getOwnerL2() {
  let Launchpad_Listing_02 = new ethers.Contract(
    address_Listing_02,
    abi_Listing_02,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  let Owner = await Launchpad_Listing_02.getOwner()
  console.log(`The owner of the smart contract is ${Owner}`)
}

export async function fundL2() {
  let Launchpad_Listing_02 = new ethers.Contract(
    address_Listing_02,
    abi_Listing_02,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  console.log(`Funding with floor price of: ${floorPrice_Listing_02} ETH`)
  try {
    const transationResponse = await Launchpad_Listing_02.fund({
      value: ethers.utils.parseEther(floorPrice_Listing_02),
    })
  } catch (error) {
    console.log(error)
  }
}

export async function getContractAddressL2() {
  let Launchpad_Listing_02 = new ethers.Contract(
    address_Listing_02,
    abi_Listing_02,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  console.log(`The contract address is: ${Launchpad_Listing_02.address}`)
}

export async function withdrawL2() {
  let Launchpad_Listing_02 = new ethers.Contract(
    address_Listing_02,
    abi_Listing_02,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  const amount = document.getElementById("withdraw-amount").value
  await Launchpad_Listing_02.withdraw(amount)
  console.log(`The contract funds are withdrawed to owners address`)
}

export async function getFunderL2() {
  let Launchpad_Listing_02 = new ethers.Contract(
    address_Listing_02,
    abi_Listing_02,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  const funderid = document.getElementById("funder-id").value
  const funderAddress = await Launchpad_Listing_02.getFunder(funderid)
  console.log(`The Funder address of index ${funderid} is ${funderAddress}`)
}
// #####Listing_03####
export async function getBalanceL3() {
  let Launchpad_Listing_03 = new ethers.Contract(
    address_Listing_03,
    abi_Listing_03,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  let Balance = await Launchpad_Listing_03.getBalance()
  console.log(`The Balance of the contract is: ${Balance}`)
}

export async function getOwnerL3() {
  let Launchpad_Listing_03 = new ethers.Contract(
    address_Listing_03,
    abi_Listing_03,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  let Owner = await Launchpad_Listing_03.getOwner()
  console.log(`The owner of the smart contract is ${Owner}`)
}

export async function fundL3() {
  let Launchpad_Listing_03 = new ethers.Contract(
    address_Listing_03,
    abi_Listing_03,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  console.log(`Funding with floor price of: ${floorPrice_Listing_03} ETH`)
  try {
    const transationResponse = await Launchpad_Listing_03.fund({
      value: ethers.utils.parseEther(floorPrice_Listing_03),
    })
  } catch (error) {
    console.log(error)
  }
}

export async function getContractAddressL3() {
  let Launchpad_Listing_03 = new ethers.Contract(
    address_Listing_03,
    abi_Listing_03,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  console.log(`The contract address is: ${Launchpad_Listing_03.address}`)
}

export async function withdrawL3() {
  let Launchpad_Listing_03 = new ethers.Contract(
    address_Listing_03,
    abi_Listing_03,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  const amount = document.getElementById("withdraw-amount").value
  await Launchpad_Listing_03.withdraw(amount)
  console.log(`The contract funds are withdrawed to owners address`)
}

export async function getFunderL3() {
  let Launchpad_Listing_03 = new ethers.Contract(
    address_Listing_03,
    abi_Listing_03,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  const funderid = document.getElementById("funder-id").value
  const funderAddress = await Launchpad_Listing_03.getFunder(funderid)
  console.log(`The Funder address of index ${funderid} is ${funderAddress}`)
}
// #####Listing_04####
export async function getBalanceL4() {
  let Launchpad_Listing_04 = new ethers.Contract(
    address_Listing_04,
    abi_Listing_04,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  let Balance = await Launchpad_Listing_04.getBalance()
  console.log(`The Balance of the contract is: ${Balance}`)
}

export async function getOwnerL4() {
  let Launchpad_Listing_04 = new ethers.Contract(
    address_Listing_04,
    abi_Listing_04,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  let Owner = await Launchpad_Listing_04.getOwner()
  console.log(`The owner of the smart contract is ${Owner}`)
}

export async function fundL4() {
  let Launchpad_Listing_04 = new ethers.Contract(
    address_Listing_04,
    abi_Listing_04,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  console.log(`Funding with floor price of: ${floorPrice_Listing_04} ETH`)
  try {
    const transationResponse = await Launchpad_Listing_04.fund({
      value: ethers.utils.parseEther(floorPrice_Listing_04),
    })
  } catch (error) {
    console.log(error)
  }
}

export async function getContractAddressL4() {
  let Launchpad_Listing_04 = new ethers.Contract(
    address_Listing_04,
    abi_Listing_04,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  console.log(`The contract address is: ${Launchpad_Listing_04.address}`)
}

export async function withdrawL4() {
  let Launchpad_Listing_04 = new ethers.Contract(
    address_Listing_04,
    abi_Listing_04,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  const amount = document.getElementById("withdraw-amount").value
  await Launchpad_Listing_04.withdraw(amount)
  console.log(`The contract funds are withdrawed to owners address`)
}

export async function getFunderL4() {
  let Launchpad_Listing_04 = new ethers.Contract(
    address_Listing_04,
    abi_Listing_04,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  const funderid = document.getElementById("funder-id").value
  const funderAddress = await Launchpad_Listing_04.getFunder(funderid)
  console.log(`The Funder address of index ${funderid} is ${funderAddress}`)
}
// #####Listing_backup####
export async function getBalanceT() {
  let LaunchpadTEST = new ethers.Contract(
    address_lpTestv2,
    abi_lpTestv2,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  let Balance = await LaunchpadTEST.getBalance()
  console.log(`The Balance of the contract is: ${Balance}`)
}

export async function getOwnerT() {
  let LaunchpadTEST = new ethers.Contract(
    address_lpTestv2,
    abi_lpTestv2,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  let Owner = await LaunchpadTEST.getOwner()
  console.log(`The owner of the smart contract is ${Owner}`)
}

export async function pledge(signer, address, abi, floorPrice) {
  let LaunchpadTEST = new ethers.Contract(address, abi, signer)
  console.log(`Funding with floor price of: ${floorPrice} ETH`)
  try {
    const transationResponse = await LaunchpadTEST.fund({
      value: ethers.utils.parseEther(floorPrice),
    })
  } catch (error) {
    console.log(error)
  }
}

export async function subscribe(firebase, uid, address, isAdd) {
  await firebase.updateArray("projects", uid, "subscribers", address, isAdd)
}

export async function getContractAddressT() {
  let LaunchpadTEST = new ethers.Contract(
    address_lpTestv2,
    abi_lpTestv2,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  console.log(`The contract address is: ${LaunchpadTEST.address}`)
}

export async function withdrawT() {
  let LaunchpadTEST = new ethers.Contract(
    address_lpTestv2,
    abi_lpTestv2,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  const amount = document.getElementById("withdraw-amount").value
  await LaunchpadTEST.withdraw(amount)
  console.log(`The contract funds are withdrawed to owners address`)
}

export async function getFunderT() {
  let LaunchpadTEST = new ethers.Contract(
    address_lpTestv2,
    abi_lpTestv2,
    new ethers.providers.Web3Provider(window.ethereum).getSigner()
  )
  const funderid = document.getElementById("funder-id").value
  const funderAddress = await LaunchpadTEST.getFunder(funderid)
  console.log(`The Funder address of index ${funderid} is ${funderAddress}`)
}
