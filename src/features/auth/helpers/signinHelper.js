import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signInHandler = createAsyncThunk(
      "auth/signIn",
      async ({ userName, password }, { rejectWithValue }) => {
            try {
                  const { status, data } = await axios.post("/api/auth/login", { userName, password });
                  
                  if (status === 200 ) {
                        localStorage.setItem("Alcon_token", data.encodedToken);
                        localStorage.setItem("Alcon_userInfo", JSON.stringify( data.foundUser ));
                  }

                  return data;

            } catch (err) {
                  return rejectWithValue(err.response.data.errors[0]);
            }            
      }
);