"use client"
import React from 'react'
import { Button, Form, Radio, message } from 'antd'
import '../stylesheets/commonClasses.css'
import '../stylesheets/antdOverride.css'
import '../stylesheets/antdOverride.css'

import Link from 'next/link'
import axios from 'axios'


function Register() {

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post("/api/users/register", values);
      message.success(response.data.message)
    } catch (error:any) {
      message.error(error.response.data.message || 'Something went wrong')
    }
  }


  return (
    <div className='flex justify-center h-screen items-center bg-primary'>
      <div className="card p-5 w-500">
        <h1 className='text-xl text-center'>MyJobs - Register</h1>
        <hr />

        <Form
          onFinish={onFinish}
          layout='vertical'
          className='px-3'>

          <Form.Item label="Register As: " name="userType">
            <Radio.Group>
              <Radio value="employer">Employer</Radio>
              <Radio value="employee">Employee</Radio>
            </Radio.Group>

          </Form.Item>

          <Form.Item label="Name: " name="name">
            <input type="text" className='Input' />
          </Form.Item>

          <Form.Item label="Email: " name="email">
            <input type="email" className='Input' />
          </Form.Item>

          <Form.Item label="Password: " name="password">
            <input type="password" className='input' />
          </Form.Item>

          <Button type='primary' htmlType='submit' block className='my-2'>Register</Button>
          <Link href={'./login'}>Already have an account? Login</Link>
        </Form>

      </div>
    </div>
  )
}

export default Register