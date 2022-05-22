import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signInHandler = createAsyncThunk(
    "auth/signIn",
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post("/api/auth/login", { username, password });

            if (status === 200) {
                localStorage.setItem("Alcon_User", JSON.stringify({ token: data.encodedToken, userInfo: data.foundUser }));
            }
            return data;
        } catch (err) {
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);