import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeam } from "../../utils/interfaces";
import CreatexAPI from "../../utils/api";

interface IInitial {
  team: ITeam[];
  loading: boolean;
  error: Error | null;
}

const initialState: IInitial = {
  team: [],
  loading: false,
  error: null,
};

export const fetchTeam = createAsyncThunk(
  "team/fetchTeam",
  async (_, { rejectWithValue }) => {
    try {
      return await CreatexAPI.fetchData("team");
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeam.pending, (state) => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(fetchTeam.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.team = action.payload;
    });
    builder.addCase(fetchTeam.rejected, (state, action: PayloadAction<any>) => {
      state.error = action.payload;
      state.loading = false;
    });
  },
});

export const teamReducer = teamSlice.reducer;
