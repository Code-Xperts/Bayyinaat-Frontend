// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  companyInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setCompanyInfo: (state, action) => {
      state.companyInfo = action.payload;
    },
  },
});

export const { setUser, clearUser, setCompanyInfo } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
