import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IEvent } from "../../utils/interfaces";
import CreatexAPI from "../../utils/api";

interface IInitial {
  items: IEvent[];
  loading: boolean;
  error: Error | null;
}

const initialState: IInitial = {
  items: [],
  loading: false,
  error: null,
};

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      return await CreatexAPI.fetchData("events");
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.error = action.payload as Error;
      state.loading = false;
    });
  },
});

export const eventsReducer = eventSlice.reducer;
