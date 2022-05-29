import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const followUser = createAsyncThunk("user/follow", 
    async ({ followUserId, token }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post(`/api/users/follow/${followUserId}`,
                {},
                {
                    headers: { authorization: token }
                });

            if (status === 200) {
                return data;
            }
        } catch (error) {
            return rejectWithValue(error.response.data.errors[0]);
    }
});