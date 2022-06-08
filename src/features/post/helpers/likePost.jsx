import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const likePost = createAsyncThunk(
    "post/likePost",
    async ({ postId, token }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post(`/api/posts/like/${ postId }`,
                {},
                { headers: { authorization: token } }
            );

            if(status === 201) {
                return data.posts;
            }
        } catch (err) {
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);