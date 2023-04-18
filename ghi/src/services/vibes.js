import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const vibeApi = createApi({
    reducerPath: 'vibeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_VIBE_CHECK_API_HOST}/api/vibes`,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        getVibes: builder.query({
            query: () => '',
            providesTags: (result) => {
                const tags = [{ type: 'Vibes', id: 'LIST' }]
                if (!result) return tags;
                return [
                    ...result.map(({id}) => ({type: 'Vibes', id})),
                    ...tags
                ]
            }
        }),
        getVibesByCreator: builder.query({
            query: () => '/me',
            providesTags: (result) => {
                const tags = [{ type: 'Vibes', id: 'LIST' }]
                if (!result) return tags;
                return [
                    ...result.map(({id}) => ({type: 'Vibes', id})),
                    ...tags
                ]
            }
        }),

    })
})

export const { useGetVibesQuery, useGetVibesByCreatorQuery } = vibeApi;
