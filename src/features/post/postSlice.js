

const initialState = {
    isLoading: false,
    error: "",
    showCreatePostModal: false,
    posts: []
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        openPostModal: state => {
            state.showPostModal = true;
        }
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [getAllPosts.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.posts = payload;
        },
        [getAllPosts.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        },

        // create Post

        [createPost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.error = "";
        },
        [createPost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // edit Post

        [editPost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.error = "";
        },
        [editPost.rejected]: (state, { payload }) => {
            state.error = payload;
        },

        // delete Post

        [deletePost.fulfilled]: (state, { payload }) => {
            state.posts = payload;
            state.error = "";
        },
        [deletePost.rejected]: (state, { payload }) => {
            state.error = payload;
        },
    }
});

export const { openPostModal } = postSlice.actions;

export default postSlice.reducer;