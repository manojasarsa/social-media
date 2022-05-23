import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/post/postSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        post: postReducer
    }
});