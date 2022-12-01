import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ticketApi = createApi({
    //ec2-174-129-96-192.compute-1.amazonaws.com
    reducerPath: 'ticketApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://ec2-174-129-96-192.compute-1.amazonaws.com:3300/dev/api/ticket/'}),
    endpoints: (builder) => ({
        getTestApi: builder.query({
            query: () => 'test'
        }),
        getTicketById: builder.query({
            query: (ticketId) => `search/${ticketId}`
        }),
        updateTicket: builder.mutation({
            query: (data) => ({
                url: 'update',
                method: 'POST',
                body: data
            })
        }),
        createTicket: builder.mutation({
            query: (data) => ({
                url: 'create',
                method: "POST",
                body: data
            })
        })
    })
})

export const { 
    useGetTestApiQuery,
    useGetTicketByIdQuery,
    useUpdateTicketMutation,
    useCreateTicketMutation
 } = ticketApi