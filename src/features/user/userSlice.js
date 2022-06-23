import { createSlice } from "@reduxjs/toolkit";
import { getUsers, updateUser, followUser, unFollowUser } from "./helpers";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const initialState = {
    users: [],
    upLoadingPhoto: false,
    isLoading: false,
    foundUsers: [],
    searchTerm: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        startUpLoading: (state) => {
            state.upLoadingPhoto = true;
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
            state.upLoadingPhoto = true;
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.upLoadingPhoto = false;
            state.users = state.users.map(user => (user.username === payload.username ? payload : user));
            toast("Updated Profile", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
        },
        [updateUser.rejected]: (state) => {
            state.upLoadingPhoto = false;
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
            toast("User Followed", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
        },
        [followUser.rejected]: (state) => {
            state.isLoading = false;
        },

        //unfollow user

        [unFollowUser.pending]: (state) => {
            state.isLoading = true;
        },
        [unFollowUser.fulfilled]: (state, { payload }) => {
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
            toast("User Unfollowed", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
        },
        [unFollowUser.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});

export const { setLoading, startUpLoading } = userSlice.actions;

export default userSlice.reducer;