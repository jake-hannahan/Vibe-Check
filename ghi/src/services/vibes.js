import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const vibeApi = createApi({
  reducerPath: "vibeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_VIBE_CHECK_API_HOST}/api/vibes`,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getVibes: builder.query({
      query: () => "",
      providesTags: (result) => {
        const tags = [{ type: "Vibes", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Vibes", id })), ...tags];
      },
    }),
    getVibesByCreator: builder.query({
      query: () => "/me",
      providesTags: (result) => {
        const tags = [{ type: "Vibes", id: "LIST" }];
        if (!result) return tags;
        return [...result.map(({ id }) => ({ type: "Vibes", id })), ...tags];
      },
    }),
    getVibe: builder.query({
      query: (props) => `/${props.vibeId}`,
      providesTags: ["Vibe"],
    }),
    createVibe: builder.mutation({
        query: (body) => ({
            url: '',
            method: 'POST',
            body: body,
            credentials: "include"
        }),
        invalidatesTags: [{ type: 'Vibes', id: 'LIST' }]
    }),
    updateVibe: builder.mutation({
        query: ({id, body}) => ({
            url: `/${id}`,
            method: 'PUT',
            body: body
        }),
        invalidatesTags: [{ type: 'Vibes', id: 'LIST' }]
    }),
    deleteVibe: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
        credentials: 'include'
      }),
      invalidatesTags: [{ type: 'Vibes', id: 'LIST' }]
    }),
    })
})


export const { useGetVibesQuery, useGetVibesByCreatorQuery, useGetVibeQuery, useDeleteVibeMutation, useCreateVibeMutation, useUpdateVibeMutation } = vibeApi;
