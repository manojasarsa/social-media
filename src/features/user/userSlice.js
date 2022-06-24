import { createSlice } from "@reduxjs/toolkit";
import { getUsers, updateUser, followUser, unFollowUser } from "./helpers";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const initialState = {
    users: [],
    upLoadingPhoto: false,
    isLoading: false,
    error: "",
    searchResults: [],
    searchQuery: "",
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
        searchUser: (state, { payload }) => {
            state.searchQuery = payload;
            state.searchResults = state.users.filter(
                user =>
                    user.username.toLowerCase().includes(payload.trim().toLowerCase()) ||
                    user.firstName.toLowerCase().includes(payload.trim().toLowerCase()) ||
                    user.lastName.toLowerCase().includes(payload.trim().toLowerCase())
            );
        },
    },
    extraReducers: {

        //getUser 

        [getUsers.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [getUsers.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.users = payload;
        },
        [getUsers.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        // updateUser

        [updateUser.pending]: (state) => {
            state.upLoadingPhoto = true;
            state.error = "";
        },
        [updateUser.fulfilled]: (state, { payload }) => {
            state.upLoadingPhoto = false;
            state.users = state.users.map(user => (user.username === payload.username ? payload : user));
            toast("Updated Profile", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [updateUser.rejected]: (state, { payload }) => {
            state.upLoadingPhoto = false;
            state.error = payload;
        },

        // follow user

        [followUser.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
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
            toast("User Followed", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [followUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        //unfollow user

        [unFollowUser.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
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
            toast("User Unfollowed", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [unFollowUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },
    }
});

export const { setLoading, startUpLoading, searchUser } = userSlice.actions;

export default userSlice.reducer;