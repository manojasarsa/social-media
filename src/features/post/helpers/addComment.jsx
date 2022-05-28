import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addComment = createAsyncThunk(
    "/post/addComment",
    async ({ postId, token, commentData }, { rejectWithValue }) => {
        console.log("inside");
        {console.log("postid:", postId, "commentData:", commentData)}
        try {
            console.log("inside try")

            const { data } = await axios.post(`/api/comments/add/${postId}`,
                { commentData },
                { headers: { authorization: token },
            })
  
            console.log("data", data)
            // if (status === 201) {
            //     console.log("success");
            //     
                
            // }
            return data.posts;
        } catch (err) {
            console.log("error hogya", err)
            return rejectWithValue(err.response.data.errors[0]);
        }
    }
);