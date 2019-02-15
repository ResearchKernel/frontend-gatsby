import React, { useState } from 'react'
import Header from '../components/header/header'
import { Form, Input, Button } from 'antd'
import './css/styles.css'


const { TextArea } = Input

const Contact = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`Query by ${name} with ${email} stating ${msg}`)
  }

  const nameChange = event => {
    setName(event.target.value)
  }

  const emailChange = event => {
    setEmail(event.target.value)
  }

  const msgChange = event => {
    setMsg(event.target.value)
  }

  return (
    <div>
      <Header />
      <main className="content">

        <section id="contact-title" className="section header" >
          <h1>Contact Us</h1>
        </section>

        <section id="contact-section1" className="section-form">
          <div className="contact-section_details">
            <h2>Fill in and we will be sure to contact you!</h2>
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
                <label htmlFor="message">Message*: </label>
                <TextArea rows={4} required onChange={msgChange}/>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Send</Button>
              </Form.Item>
            </Form>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Contact