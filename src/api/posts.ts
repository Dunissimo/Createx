import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@src/utils/consts";
import { IBlogCard, IPostContent } from "@src/utils/interfaces";

export const postsApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getPostContent: builder.query<IPostContent, string>({
      query: (id) => `/posts/content/${Number(id) - 1}`,
    }),
    getPosts: builder.query<IBlogCard[], void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery, useGetPostContentQuery } = postsApi;
