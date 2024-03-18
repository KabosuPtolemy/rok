import React, { useEffect } from "react"
import Styles from "../styles/Auth.module.css"

import { useDispatch } from "react-redux"
import {
  setAddress,
  setNetwork,
  setIsConnected,
  setLoading,
} from "../store/slices/userSlice"

import { setChainId } from "../store/slices/nftProjectSlice"

import { toDecimal, remove0xIfExists } from "../utils/chainIdOperations"

import {
  connectToWallet,
  findNetworkIfSupported,
  initOperations,
} from "../utils/walletOperations"

import { FirebaseService } from "../utils/FirebaseService"

// CHEAT SHEET: https://dev.to/hideckies/ethers-js-cheat-sheet-1h5j

export default function Authorization() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    initOperations(dispatch)
    dispatch(setLoading(false))
  }, [])

  const networkChanged = (chainId) => {
    let foundNetwork = findNetworkIfSupported(chainId)
    dispatch(setNetwork(foundNetwork))
    dispatch(setChainId(remove0xIfExists(toDecimal(chainId))))
    const firebase = new FirebaseService()
    firebase.initApp()

    firebase.setProjectsByChainId(
      remove0xIfExists(toDecimal(chainId)),
      dispatch
    )
  }

  const accountsChanged = (accounts) => {
    if (accounts.length > 0) {
      dispatch(setAddress(accounts[0]))
    } else {
      dispatch(setAddress(null))
      dispatch(setIsConnected(false))
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", networkChanged)
      window.ethereum.on("accountsChanged", accountsChanged)
      return () => {
        window.ethereum.removeListener("chainChanged", networkChanged)
        window.ethereum.removeListener("accountsChanged", accountsChanged)
      }
    }
  }, [])

  // TODO: Check this out: https://www.youtube.com/watch?v=QTcuJ9rdqME

  return (
    <div>
      <button
        className={Styles.connect_button}
        onClick={() => connectToWallet(dispatch)}
      >
        MetaMask
      </button>
    </div>
  )
}
