import React from 'react'
import { Row, Col, Form, Typography, Input, Button } from 'antd'
import { useCreateTicketMutation } from '../app/api/ticketApi'
import Swal from 'sweetalert2'

export default function CreateTicket() {

    const [createTicket, result] = useCreateTicketMutation()
    const onFinish = async (values) => {
        console.log("on finish", values)
        createTicket(values).then(data => {
            console.log("data of ticket creation is", data)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Ticket Created Successfully',
                showConfirmButton: false,
                timer: 1500,
                footer: 'Please check your email for Ticket Id'
              })
        }).catch(error => {
            console.log("error in ticket creation is", error)
        })
    }

    return (
        <>
            <Form
                name="ticket_form"
                layout='vertical'
                onFinish={onFinish}
            >
                <Typography.Title level={3}>Create Ticket</Typography.Title>
                <Form.Item
                    label="Full Name"
                    name="fullName"
                    rules={[
                        { required: true, message: "Full Name can't be blank" },
                        { min: 5, message: "Full Name must be at least 5 characters long" }
                    ]}
                >
                    <Input />
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
                    <Input type="number" />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { required: true, message: "Full Name can't be blank" },
                        { type: "email", message: "Please enter a valid email" }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Description"
                    name="description"
                    rules={[
                        { required: true, message: "This field can't be empty" },
                        { whitespace: true }
                    ]}
                >
                    <Input.TextArea showCount />
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType='submit'
                    >create</Button>
                </Form.Item>
            </Form>
        </>
    )
}
