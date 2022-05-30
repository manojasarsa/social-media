import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editComment = createAsyncThunk(
    "/post/editComment",
    async ({ postId, token, commentData }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post(
                `/api/comments/edit/${postId}/${commentData._id}`,
                { commentData },
                { headers: { authorization: token }}
            )

            if (status === 201) {
                return data.posts;
            }
        } catch (err) {
            console.log(err)
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);