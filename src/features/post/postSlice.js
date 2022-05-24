import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, createPost, editPost, deletePost, likePost, dislikePost } from "./helpers";

const initialState = {
    isLoading: false,
    error: "",
    showPostModal: false,
    posts: [],
    editPostObj: null,
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        openPostModal: state => {
            state.showPostModal = true;
        },
        closePostModal: state => {
            state.showPostModal = false;
        },
        setEditPostObj: (state, { payload }) => {
            state.editPostObj = payload;
        }
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [getAllPosts.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.posts = payload;
        },
        [getAllPosts.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        // create Post

        [createPost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.error = "";
        },
        [createPost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // edit Post

        [editPost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.error = "";
        },
        [editPost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // delete Post

        [deletePost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.error = "";
        },
        [deletePost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // like Post

        [likePost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
        },
        [likePost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // dislike Post

        [dislikePost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
        },
        [dislikePost.rejected]: (state, { payload }) => {
            state.error = payload;
        },
    }
});

export const { openPostModal, closePostModal, setEditPostObj } = postSlice.actions;

export default postSlice.reducer;