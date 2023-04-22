import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBlogCard } from "../../utils/interfaces";
import CreatexAPI from "../../utils/api";

interface IInitial {
  posts: IBlogCard[];
  loading: boolean;
  error: Error | null;
}

const initialState: IInitial = {
  posts: [],
  loading: true,
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchBlog",
  async (_, { rejectWithValue }) => {
    try {
      return await CreatexAPI.fetchData("posts");
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.posts = action.payload;
    });
    builder.addCase(
      fetchPosts.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      }
    );
  },
});

export const postsReducer = postsSlice.reducer;
