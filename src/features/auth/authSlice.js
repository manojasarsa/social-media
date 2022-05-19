import { createSlice } from "@reduxjs/toolkit";
import { signInHandler, signUpHandler } from "./helpers";

const initialState = {
      token: localStorage.getItem("Alcon_token")?.token || "",
      userInfo: JSON.parse(localStorage.getItem("Alcon_user"))?.userInfo || {},
      isLoading: false,
}

export const authSlice = createSlice({
      name: "auth",
      initialState,
      reducers: {
            signOutHandler: (state) => {
                  localStorage.removeItem("Alcon_token");
                  localStorage.removeItem("Alcon_userInfo");
                  state.token = "";
                  state.userInfo = {};
            },
      },
      extraReducers: {
            [signInHandler.pending]: (state) => {
                  state.isLoading = true;
            },
            [signInHandler.fulfilled]: (state, { payload }) => {
                  state.isLoading = false;
                  state.token = payload.encodedToken;
                  state.userInfo = payload.foundUser
            },
            [signInHandler.rejected]: (state, { payload }) => {
                  state.isLoading = false;
            },

            [signUpHandler.pending]: (state) => {
                  state.isLoading = true;
            },
            [signUpHandler.fulfilled]: (state, { payload }) => {
                  state.isLoading = false;
                  state.token = payload.encodedToken;
                  state.userInfo = payload.createdUser
            },
            [signUpHandler.rejected]: (state, { payload }) => {
                  state.isLoading = false;
            },
      },
});

export const { signOut } = authSlice.actions;

export default authSlice.reducer ;