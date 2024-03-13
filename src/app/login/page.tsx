"use client"
import React from 'react'
import { Button, Form, Radio} from 'antd'
import '../stylesheets/commonClasses.css'
import '../stylesheets/antdOverride.css'
import '../stylesheets/antdOverride.css'

import Link from 'next/link'


function Login() {

  const onFinish = (values: any) => {
    console.log("Success: ", values)
  }


  return (
    <div className='flex justify-center h-screen items-center bg-primary'>
      <div className="card p-5 w-500">
        <h1 className='text-xl text-center'>MyJobs - Login</h1>
        <hr />

        <Form
          onFinish={onFinish}
          layout='vertical'
          className='px-3'>

          <Form.Item label="Login As: " name="userType">
            <Radio.Group>
              <Radio value="employer">Employer</Radio>
              <Radio value="employee">Employee </Radio>
            </Radio.Group>

          </Form.Item>

          <Form.Item label="Email: " name="email">
            <input type="email" className='input' />
          </Form.Item>

          <Form.Item label="Password: " name="password">
            <input type="password" className='input' />
          </Form.Item>

          <Button type='primary' htmlType='submit' block className='my-2'>Login</Button>
          <Link href={'./register'}>Don't have an account? Register</Link>
        </Form>

      </div>
    </div>
  )
}

export default Login