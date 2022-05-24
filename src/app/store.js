import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/post/postSlice";
import bookmarkReducer from "../features/bookmark/bookmarkSlice";

export default configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        posts: postReducer,
        bookmarks: bookmarkReducer
    }
});