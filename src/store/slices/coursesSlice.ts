import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CreatexAPI from "@utils/api";
import { ICourse } from "@utils/interfaces";

interface IInitial {
  items: ICourse[];
  loading: boolean;
  error: Error | null;
}

const initialState: IInitial = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (_, { rejectWithValue }) => {
    try {
      return await CreatexAPI.fetchData("courses");
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.error = action.payload as Error;
      state.loading = false;
    });
  },
});

export const coursesReducer = coursesSlice.reducer;
