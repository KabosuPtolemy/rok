import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    wallet: {
      isConnected: false,
      address: null,
      signer: null,
      network: null,
    },
    app: {
      selectedPage: null,
      loading: false,
    },
    icon: {
      color: "#60abef",
      userIcon: "jazzicon",
    },
    userStatus: "None",
  },
  reducers: {
    //Actions
    setAddress: (state, action) => {
      return { ...state, wallet: { ...state.wallet, address: action.payload } }
    },
    setSigner: (state, action) => {
      return { ...state, wallet: { ...state.wallet, signer: action.payload } }
    },
    setNetwork: (state, action) => {
      return { ...state, wallet: { ...state.wallet, network: action.payload } }
    },
    setIsConnected: (state, action) => {
      return {
        ...state,
        wallet: { ...state.wallet, isConnected: action.payload },
      }
    },
    setLoading: (state, action) => {
      return { ...state, app: { ...state.app, loading: action.payload } }
    },
    setSelectedPage: (state, action) => {
      return { ...state, app: { ...state.app, selectedPage: action.payload } }
    },
    setUserIcon: (state, action) => {
      return { ...state, icon: { ...state.icon, userIcon: action.payload } }
    },
    setIconColor: (state, action) => {
      return { ...state, icon: { ...state.icon, color: action.payload } }
    },
    setUserStatus: (state, action) => {
      return { ...state, userStatus: action.payload }
    },
  },
})

export const {
  setAddress,
  setNetwork,
  setSigner,
  setIsConnected,
  setLoading,
  setSelectedPage,
  setUserIcon,
  setIconColor,
  setUserStatus,
} = userSlice.actions

//Selectors - this is how we pull information from the global store slice
export const getAddress = (state) => state.user.wallet.address
export const getNetwork = (state) => state.user.wallet.network
export const getSigner = (state) => state.user.wallet.signer
export const getIsConnected = (state) => state.user.wallet.isConnected
export const getLoading = (state) => state.user.app.loading
export const getSelectedPage = (state) => state.user.app.selectedPage
export const getUserIcon = (state) => state.user.icon.userIcon
export const getIconColor = (state) => state.user.icon.color

export const getUserStatus = (state) => state.user.userStatus

export const userReducer = userSlice.reducer
