import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "../../utils/interfaces";
import CreatexAPI from "../../utils/api";

interface IInitial {
  events: IEvent[];
  loading: boolean;
  error: Error | null;
}

const initialState: IInitial = {
  events: [],
  loading: false,
  error: null,
};

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      return await CreatexAPI.fetchEvents();
    } catch (error) {
      return rejectWithValue(error);
    }
  }
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
      state.events = action.payload;
    });
    builder.addCase(
      fetchEvents.rejected,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.loading = false;
      }
    );
  },
});

export const eventsReducer = eventSlice.reducer;
