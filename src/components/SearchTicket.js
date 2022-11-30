import { Typography, Form, Input, Button, Row, Col } from 'antd'
import React from 'react'


export default function SearchTicket({searchTicket}) {

  const onFinish = (values) => {
    searchTicket(values)
  }

  return (
    <>
      <Form
        name="search-ticket"
        layout='vetical'
        onFinish={onFinish}
      >
        <Typography.Title level={3}>Search Ticket</Typography.Title>

        <Form.Item
          label="Ticket Id"
          name="ticketId"
          rules={[
            { required: true, message: "Ticket Id can't be blank" },
            { min: 10, message: "Ticket Id must be 10 digits long" },
            { max: 10, message: "Ticket Id must be 10 digits long" },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Button
          type="primary"
          htmlType='submit'
        >Search</Button>

      </Form>
    </>
  )
}
