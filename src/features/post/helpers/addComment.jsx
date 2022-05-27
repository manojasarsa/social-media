import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addComment = createAsyncThunk(
    "/post/addComment",
    async ({ postId, token, commentData }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post(
                `/api/comments/add/${postId}`,
                { commentData },
                { headers: { authorization: token }}
            )

            if (status === 201) {
                return data.posts;
            }
        } catch (err) {
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);