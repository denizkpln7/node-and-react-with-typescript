import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Blog} from "../../interface/Blog";
import {getBlogByIdApi, getBlogsAllApi, saveBlogApi} from "../../api/blogService/blog";



interface BlogState {
    blogs: Blog[] | null;
    loading: boolean;
    singleBlog: Blog | null;
    errors: any;
}

const initialState: BlogState = {
    blogs: [],
    singleBlog: null,
    loading: false,
    errors: null
}

export const getBlogs = createAsyncThunk<Blog[]>(
    "blog/getBlogs",
    async (_, thunkAPI) => {
        try {
            const response = await getBlogsAllApi();
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const getBlogById = createAsyncThunk<Blog>(
    "blog/getBlogById",
    async (id, thunkAPI) => {
        try {
            // @ts-ignore
            const response = await getBlogByIdApi(id)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

// @ts-ignore
export const createBlog = createAsyncThunk<Blog, Object>("blog/createBlog",
    async (data, thunkAPI) => {
        try {
            debugger
            console.log(data)
            const response = await saveBlogApi(data as Blog);
            thunkAPI.dispatch(getBlogs());
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    })


// reducers -> reduce to a specific state -> changes state
export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlogs.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload;
            state.loading = false;
        });
        builder.addCase(getBlogs.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });
        builder.addCase(getBlogById.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getBlogById.fulfilled, (state, action) => {
            state.singleBlog = action.payload;
            state.loading = false;
        });
        builder.addCase(getBlogById.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        });

    }
})

export default blogSlice.reducer;
export const {} = blogSlice.actions;