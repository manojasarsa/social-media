import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPosts = createAsyncThunk(
    "post/getPosts",
    async(_, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.get("/api/posts");
            if(status === 200) {
                return data.posts;
            }
        } catch (err) {
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);