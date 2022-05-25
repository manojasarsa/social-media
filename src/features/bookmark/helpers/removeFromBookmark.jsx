import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeFromBookmark = createAsyncThunk(
    "user/removeFromBookmark",
    async ({ token, postId }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post(
                `/api/users/remove-bookmark/${postId}`,
                {},
                { headers: { authorization: token }}
            )

            if (status === 200) {
                return data.bookmarks;
            }
        } catch (err) {
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);