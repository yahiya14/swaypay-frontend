import { skipToken } from '@reduxjs/toolkit/dist/query'
import React, { useState } from 'react'
import { useGetTicketByIdQuery } from '../app/api/ticketApi'
import CreateTicket from '../components/CreateTicket'
import DisplayTicket from '../components/DisplayTicket'
import SearchTicket from '../components/SearchTicket'


export default function Landing() {

    const [ticketId, setTicketId] = useState("")
    const {data, error, isLoading} = useGetTicketByIdQuery(ticketId !== "" ? ticketId : skipToken )

    const searchTicket = (values) => {
        setTicketId(values.ticketId)
    }


    return (
        <>
            <div className='landing-container'>
                <div className='create-ticket-container'>
                    <CreateTicket />
                </div>
                <div className='search-ticket-container'>
                    <SearchTicket searchTicket={searchTicket} />
                    <DisplayTicket ticket={data ? data.data : null}/>
                </div>
            </div>
        </>
    )
}
