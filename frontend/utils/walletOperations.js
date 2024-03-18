import { ethers } from "ethers"

import {
  setAddress,
  setNetwork,
  setSigner,
  setIsConnected,
} from "../store/slices/userSlice"
import { setChainId, setProjects } from "../store/slices/nftProjectSlice"

import { supportedChains } from "./supportedChains"
import { decimalToHexChainId } from "./chainIdOperations"

import { FirebaseService } from "../utils/FirebaseService"

export async function initOperations(dispatch) {
  if (typeof window !== "undefined" && window.ethereum) {
    const web3Provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    )

    const accounts = await window.ethereum.request({ method: "eth_accounts" })
    dispatch(setAddress(accounts[0]))

    const networkProvider = await web3Provider.getNetwork()
    const chainId = networkProvider.chainId
    const network = findNetworkIfSupported(chainId)
    dispatch(setNetwork(network))
    dispatch(setChainId(chainId))

    dispatch(setSigner(web3Provider.getSigner()))

    if (accounts[0] && chainId && network) {
      const firebase = new FirebaseService()
      firebase.initApp()
      dispatch(setIsConnected(true))

      firebase.setProjectsByChainId(chainId, dispatch)
    }
  }
}

export async function connectToWallet(dispatch) {
  //this button is created by 33minute from https://www.youtube.com/watch?v=pdsYCkUWrgQ
  //todo: adjust so that other buttons dont show up untill conected
  if (typeof window.ethereum !== "undefined") {
    // This was specified by ethers documentation
    const web3Provider = new ethers.providers.Web3Provider(
      window.ethereum,
      "any"
    )

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      dispatch(setAddress(accounts[0]))

      const networkProvider = await web3Provider.getNetwork()

      const chainId = networkProvider.chainId

      const network = findNetworkIfSupported(chainId)

      dispatch(setNetwork(network))
      dispatch(setChainId(chainId))
      // TODO: Check if network is supported

      dispatch(setSigner(web3Provider.getSigner()))

      dispatch(setIsConnected(true))
    } catch (e) {
      // Now since we have made sure to redirect the user to Metamask website if metamask is not available as na extension or so
      // We need to handle the not logged in error
    }
  } else {
    open("https://metamask.io/download/")
  }
}

export const changeNetwork = async (newNetwork, dispatch) => {
  try {
    if (!window.ethereum) {
      // redirect to metamask website
    } else {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [
          {
            chainId: decimalToHexChainId(newNetwork.chainId),
          },
        ],
      })

      dispatch(setNetwork(newNetwork))
      dispatch(setChainId(newNetwork.chainId))
    }
  } catch (e) {
    // TODO: Add proper error handling
    if (e.code === 4902) {
      // [-32602] -> May not specify default MetaMask chain.
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: decimalToHexChainId(newNetwork.chainId),
              chainName: newNetwork.name,
              rpcUrls: newNetwork.rpcUrls,
            },
          ],
        })
        dispatch(setNetwork(newNetwork))
        dispatch(setChainId(newNetwork.chainId))
      } catch (err) {
        if (err.code == 4001) {
          // [4001] -> User rejected the request.
          // TODO: Handle correctly
        }
      }
    }
  }
}

export function findNetworkIfSupported(chainId) {
  let foundNetwork
  for (const network of supportedChains) {
    if (network.chainId == chainId) {
      foundNetwork = network
    }
  }
  return foundNetwork
}

export function preformAddressSlice(address) {
  const addressLen = address.length
  return (
    // "CONNECTED TO " +
    address.slice(0, 6) + "..." + address.slice(addressLen - 4, addressLen)
  )
}

export function formatNetworkName(networkName) {
  return networkName.split(" ")[0]
}
