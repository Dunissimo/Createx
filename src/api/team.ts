import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@src/utils/consts";
import { ITeam } from "@src/utils/interfaces";

export const teamApi = createApi({
  reducerPath: "team",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getTeam: builder.query<ITeam[], void>({
      query: () => `/team`,
    }),
  }),
});

export const { useGetTeamQuery } = teamApi;
