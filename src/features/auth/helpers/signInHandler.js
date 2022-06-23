import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export const signInHandler = createAsyncThunk(
    "auth/signIn",
    async ({ username, password }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post("/api/auth/login", { username, password });

            if (status === 200) {
                localStorage.setItem("Alcon_User", JSON.stringify({ token: data.encodedToken, userData: data.foundUser }));
                toast("Welcome Back!", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
            }
            return data;
        } catch (err) {
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);