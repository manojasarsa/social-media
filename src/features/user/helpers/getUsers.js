import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("user/getUsers", async (_, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.get("/api/users");
        if (status === 200) {
            return data.users;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0]);
    }
});