import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpHandler = createAsyncThunk(
      "auth/signUp",
      async ({ firstName, lastName, userName, password }, { rejectWithValue }) => {
            try {
                  const { status, data } = await axios.post("/api/auth/signup", { 
                        firstName, lastName, userName, password 
                  });
                  
                  if (status === 201 ) {
                        localStorage.setItem("Alcon_token", data.encodedToken);
                        localStorage.setItem("Alcon_userInfo", JSON.stringify( data.createdUser ));
                  }

                  return data;

            } catch (err) {
                  return rejectWithValue(err.response.data.errors[0]);
            }            
      }
);