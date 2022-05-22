import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpHandler = createAsyncThunk(
    "auth/signUp",
    async ({ firstName, lastName, username, password }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post("/api/auth/signup", {
                firstName, lastName, username, password
            });

            if (status === 201) {
                localStorage.setItem("Alcon_User", JSON.stringify({ token: data.encodedToken, userInfo: data.createdUser }));
                return data;
            }
        } catch (err) {
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);