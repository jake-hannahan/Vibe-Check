import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_VIBE_CHECK_API_HOST}`,
    }),
    endpoints: (builder) => ({
        getAccount: builder.query({
            query: () => ({
                url: '/token',
                credentials: 'include',
            }),
            transformResponse: (response) => response?.account,
            providesTags: ['Account']
        }),
        login: builder.mutation({
            query: (body) => {
                const formData = new FormData()
                formData.append('username', body.username)
                formData.append('password', body.password)
                return {
                    url: '/token',
                    method: 'POST',
                    body: formData,
                    credentials: 'include'
                }
            },
            invalidatesTags: ['Account']
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/token',
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['Account']
        }),
        signup: builder.mutation({
            query: (body) => {
                const request = {
                username: `${body.username}`,
                password: `${body.password}` }
                return {
                    url: '/api/accounts',
                    method: 'POST',
                    body: request,
                    credentials: 'include'
                }
            },
            invalidatesTags: ['Account']
        })
    })
})

export const { useGetAccountQuery, useLogoutMutation, useLoginMutation, useSignupMutation } = authApi;
