import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk("user/update", async ({ token, userData }, { rejectWithValue }) => {
    try {
        const { status, data } = await axios.post("/api/users/edit",
            { userData },
            {
                headers: { authorization: token }
            });

        if (status === 201) {
            return data.user;
        }
    } catch (error) {
        return rejectWithValue(error.response.data.errors[0]);
    }
});