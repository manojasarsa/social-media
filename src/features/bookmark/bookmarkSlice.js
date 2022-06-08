import { createSlice } from "@reduxjs/toolkit";
import { getAllBookmarks, addToBookmark, removeFromBookmark } from "./helpers";

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
        },
        [removeFromBookmark.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

    }
});

export const { allBookmarks } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;