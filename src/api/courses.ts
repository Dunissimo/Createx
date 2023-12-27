import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@src/utils/consts";
import { ICourse, ICourseContent } from "@src/utils/interfaces";

export const coursesApi = createApi({
  reducerPath: "courses",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCourses: builder.query<ICourse[], void>({
      query: () => "/courses",
    }),

    getCourse: builder.query<ICourse, string>({
      query: (id) => `/courses/${Number(id) - 1}`,
    }),

    getCourseContent: builder.query<ICourseContent, string>({
      query: (id) => `/courses/content/${Number(id) - 1}`,
    }),
  }),
});

export const { useGetCoursesQuery, useGetCourseQuery, useGetCourseContentQuery } =
  coursesApi;
