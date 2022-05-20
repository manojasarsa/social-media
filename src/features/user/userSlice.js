import { createSlice } from "@reduxjs/toolkit";

const initialState = {
      users: [],
      uploadingPhoto: false,
      isLoading: false,
}

export const userSlice = createSlice({
      name: "user",
      initialState,
      reducers: {
            setLoading: (state) => {
                  state.isLoading = true;
            },
            startUpLoading: (state) => {
                  state.uploadingPhoto = true;
            },
      },
      extraReducers: {

            //getUser 

            [getUsers.pending]: (state) => {
                  state.isLoading = true;
            },
            [getUsers.fulfilled]: (state, { payload }) => {
                  state.isLoading = false;
                  state.users = payload;
            },
            [getUsers.rejected]: (state) => {
                  state.isLoading = true;
            },

            // updateUser

            [updateUser.pending]: (state) => {
                  state.uploadingPhoto = true;
            },
            [updateUser.fulfilled]: (state, { payload }) => {
                  state.uploadingPhoto = false;
                  state.users = state.users.map(user => (user.username === payload.username ? payload : user));
            },
            [updateUser.rejected]: (state) => {
                  state.uploadingPhoto = false;
            },

            // follow user

            [followUser.pending]: (state) => {
                  state.isLoading = true;
            },
            [followUser.fulfilled]: (state, { payload }) => {
                  state.users = state.users.map(user => {
                        if (user.username === payload.followUser.username) {
                              return payload.followUser;
                        } 
                        if (user.username === payload.user.username) {
                              return payload.user;
                        } 
                        return user;
                  });
                  state.isLoading = false;
            },
            [followUser.rejected]: (state) => {
                  state.isLoading = false;
            },

            //unfollow user

            [UnFollowUser.pending]: (state) => {
                  state.isLoading = true;
            },
            [UnFollowUser.fulfilled]: (state, { payload }) => {
                  state.users = state.users.map(user => {
                        if (user.username === payload.followUser.username) {
                              return payload.followUser;
                        } 
                        if (user.username === payload.user.username) {
                              return payload.user;
                        } 
                        return user;
                  });
                  state.isLoading = false;
            },
            [UnFollowUser.rejected]: (state) => {
                  state.isLoading = false;
            },
      }
});

export const { setLoading, startUpLoading } = userSlice.actions;

export default userSlice.reducer;