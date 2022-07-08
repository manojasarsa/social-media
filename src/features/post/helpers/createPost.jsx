import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createPost = createAsyncThunk(
    "post/createPost",
    async ({ postData, token }, { rejectWithValue }) => {
        try {
            console.log("inside");
            const { status, data } = await axios.post(
                "/api/posts",
                { postData },
                { headers: { authorization: token }}
            )

            if (status === 201) {
                return data.posts;
            }
        } catch (err) {
            console.log("error");
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);