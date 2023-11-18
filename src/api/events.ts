import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@src/utils/consts";
import { IEvent, IEventContent } from "@src/utils/interfaces";

export const eventsApi = createApi({
  reducerPath: "events",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getEvents: builder.query<IEvent[], void>({
      query: () => "/events",
    }),

    getEvent: builder.query<IEvent, number>({
      query: (id) => `/events/${+id - 1}`,
    }),

    getEventContent: builder.query<IEventContent, number>({
      query: (id) => `/events/content/${+id - 1}`,
    }),
  }),
});

export const { useGetEventsQuery, useGetEventQuery, useGetEventContentQuery } = eventsApi;
