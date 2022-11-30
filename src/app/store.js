import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ticketApi } from "./api/ticketApi";


export const store = configureStore({
    reducer: {
        [ticketApi.reducerPath] : ticketApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketApi.middleware)
})