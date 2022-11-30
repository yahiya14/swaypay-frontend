import React, { useState } from 'react'
import { Typography, Form, Input, Button, Row, Col } from 'antd'
import { useUpdateTicketMutation } from '../app/api/ticketApi'
import Swal from 'sweetalert2'


export default function DisplayTicket({ ticket }) {

    const [updateState, setUpdateState] = useState({})
    const [updateContact, result] = useUpdateTicketMutation();
    const onFinish = async (values) => {
        Swal.fire({
            title: 'Do you want to update ticket',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then(async (result) => {
            if (result.isConfirmed) {
                updateContact(values).then(data => {
                    console.log(data)
                    Swal.fire('Saved!', '', 'success')
                })
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }


    if (ticket && Object.entries(ticket).length > 0) {
        return (
            <>
                <Form
                    name="service_form"
                    onFinish={onFinish}
                    layout="vertical"
                    autoComplete='true'
                    initialValues={{
                        '_id': ticket._id,
                        'ticketId': ticket.ticketId,
                        'fullName': ticket.fullName,
                        'mobileNumber': ticket.mobileNumber,
                        'email': ticket.email,
                        'status': ticket.status,
                        'description': ticket.description
                    }}

                >

                    <Form.Item
                        label="Ticket Id"
                        name="ticketId"
                    >
                        <Input
                            disabled="true"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                    >
                        <Input
                            disabled="true"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Mobile Number"
                        name="mobileNumber"
                        rules={[
                            { required: true, message: "Mobile Number can't be blank" },
                            { min: 10, message: "Mobile Number must be 10 digits long" },
                            { max: 10, message: "Mobile Number must be 10 digits long" },
                        ]}
                    >
                        <Input
                            onChange={(e) => setUpdateState({ ...updateState, mobileNumber: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input
                            disabled="true"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            { required: true, message: "This field can't be empty" },
                            { whitespace: true }
                        ]}
                    >
                        <Input.TextArea
                            showCount
                            onChange={(e) => setUpdateState({ ...updateState, description: e.target.value })}
                        />
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType='submit'
                    >Update</Button>
                </Form>
            </>
        )
    } else {
        return (
            <h4>Nothing is Here...</h4>
        )
    }
}
