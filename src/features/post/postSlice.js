import { createSlice } from "@reduxjs/toolkit";
import { getAllPosts, createPost, editPost, deletePost, likePost, dislikePost, addComment, editComment, deleteComment } from "./helpers";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

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
        },
    },
    extraReducers: {
        [getAllPosts.pending]: state => {
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
            toast("Post Created", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [createPost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // edit Post

        [editPost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.error = "";
            toast("Post Edited", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [editPost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // delete Post

        [deletePost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.error = "";
            toast("Post Deleted", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [deletePost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // like Post

        [likePost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            toast("Liked added", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [likePost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // dislike Post

        [dislikePost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            toast("Liked removed", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [dislikePost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // add comment

        [addComment.pending]: state => {
        },
        [addComment.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            toast("Comment Added", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [addComment.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // edit comment

        [editComment.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            toast("Comment Edited", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [editComment.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // delete comment

        [deleteComment.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            toast("Comment Deleted", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [deleteComment.rejected]: (state, { payload }) => {
            state.error = payload;
        },
    }
});

export const { openPostModal, closePostModal, setEditPostObj } = postSlice.actions;

export default postSlice.reducer;