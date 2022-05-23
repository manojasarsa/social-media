import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const editPost = createAsyncThunk(
    "post/editPost",
    async ({ postData, token, post }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post(
                `/api/posts/edit/${post._id}`,
                { postData },
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