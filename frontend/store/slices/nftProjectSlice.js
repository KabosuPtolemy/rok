import { createSlice } from "@reduxjs/toolkit";

export const nftProjectSlice = createSlice({
  name: "nftProjects",
  initialState: {
    projects: [],
    // This parameter will be used for filtering nft projects
    chainId: null,
  },
  reducers: {
    //Actions
    // We can also remove projects
    // and update projects here
    setChainId: (state, action) => {
      return { ...state, chainId: action.payload };
    },
    setProjects: (state, action) => {
      return { ...state, projects: [...action.payload] };
    },
  },
});

export const { setChainId, setProjects } = nftProjectSlice.actions;

//Selectors - this is how we pull information from the global store slice
export const getProjects = (state) => state.nftProjects.projects;
export const getChainId = (state) => state.nftProjects.chainId;

export const nftProjectsReducer = nftProjectSlice.reducer;