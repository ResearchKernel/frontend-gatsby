import React, { useState } from 'react'
import Header from '../components/header/header'
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd'
import './css/common.css'
import { InputNumber } from 'antd'

const Donate = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState(1000)

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`Amount of $${amount} received with thanks from ${name} with ${email}`)
  }

  const nameChange = event => {
    setName(event.target.value)
  }

  const emailChange = event => {
    setEmail(event.target.value)
  }
  
  const amountChange = value => {
    setAmount(value)
  }

  return (
    <div>
      <Header />
      <div className="content">
        <h1>Donate</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            <label htmlFor="name">Name*: </label>
            <Input
            type="text"
            placeholder="name"
            onChange={nameChange}
            id="name"
            required
            />  
          </Form.Item>
          <Form.Item>
            <label htmlFor="email">Email*: </label>
            <Input
            type="text"
            placeholder="email@xyz.com"
            onChange={emailChange}
            id="email"
            required
            />  
          </Form.Item>
          <Form.Item>
            <label htmlFor={amount}>Amount: </label>
            <InputNumber
            defaultValue={1000}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            autoFocus={true}
            onChange={amountChange}
            id={amount}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">Pay</Button>
          </Form.Item>
        </Form>
        <footer>Copyrights &copy;2019. All Rights Reserved</footer>
      </div>
    </div>
  )
}

export default Donate