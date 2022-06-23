import { createSlice } from "@reduxjs/toolkit";
import { getAllBookmarks, addToBookmark, removeFromBookmark } from "./helpers";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();


const initialState = {
    error: "",
    isLoading: false,
    bookmarks: [],
}

const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
        allBookmarks: state => {
            state.bookmarks = [];
        }
    },
    extraReducers: {
        [getAllBookmarks.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [getAllBookmarks.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.bookmarks = payload;
        },
        [getAllBookmarks.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        // Add to Bookmark

        [addToBookmark.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [addToBookmark.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.bookmarks = payload;
            toast("Added to Bookmarks", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [addToBookmark.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        // Remove from Bookmark

        [removeFromBookmark.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [removeFromBookmark.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.bookmarks = payload;
            toast("Removed from Bookmarks", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
        },
        [removeFromBookmark.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

    }
});

export const { allBookmarks } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;