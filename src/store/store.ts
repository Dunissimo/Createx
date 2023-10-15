import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./slices/blogSlice";

import { coursesApi } from "@src/api/courses";
import { eventsApi } from "@src/api/events";
import { teamApi } from "@src/api/team";
import { postsApi } from "@src/api/posts";

const rootReducer = combineReducers({
  [coursesApi.reducerPath]: coursesApi.reducer,
  [eventsApi.reducerPath]: eventsApi.reducer,
  [teamApi.reducerPath]: teamApi.reducer,
  [postsApi.reducerPath]: postsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      coursesApi.middleware,
      eventsApi.middleware,
      teamApi.middleware,
      postsApi.middleware,
    ]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
