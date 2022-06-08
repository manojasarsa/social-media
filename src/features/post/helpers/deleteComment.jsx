import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteComment = createAsyncThunk(
    "/post/deleteComment",
    async ({ postId, token, commentId }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post(
                `/api/comments/delete/${postId}/${commentId}`,
                {},
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