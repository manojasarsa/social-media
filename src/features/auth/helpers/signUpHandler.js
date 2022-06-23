import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export const signUpHandler = createAsyncThunk(
    "auth/signUp",
    async ({ firstName, lastName, username, password }, { rejectWithValue }) => {
        try {
            const { status, data } = await axios.post("/api/auth/signup", {
                firstName, lastName, username, password
            });

            if (status === 201) {
                localStorage.setItem("Alcon_User", JSON.stringify({ token: data.encodedToken, userData: data.createdUser }));
                toast("Welcome to ALCON!", { position: toast.POSITION.BOTTOM_RIGHT, autoClose: 2000 });
                return data;
            }
        } catch (err) {
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);