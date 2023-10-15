import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/blogSlice";
import { coursesReducer } from "./slices/coursesSlice";
import { eventsReducer } from "./slices/eventsSlice";
import { teamReducer } from "./slices/teamSlice";

import { coursesApi } from "@src/api/courses";
import { eventsApi } from "@src/api/events";

const rootReducer = combineReducers({
  [coursesApi.reducerPath]: coursesApi.reducer,
  [eventsApi.reducerPath]: eventsApi.reducer,
  team: teamReducer,
  posts: postsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      coursesApi.middleware,
      eventsApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
