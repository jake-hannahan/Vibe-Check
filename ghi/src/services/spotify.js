import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyApi = createApi({
    reducerPath: 'spotifyApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_VIBE_CHECK_API_HOST}/api`,
        credentials: "include"
    }),
    endpoints: (builder) => ({
        getPlaylist: builder.query({
            query: (props) => `/playlists/${props.playlistId}`,
            providesTags: ['Playlist']
        })
    })
})

export const { useGetPlaylistQuery } = spotifyApi;
