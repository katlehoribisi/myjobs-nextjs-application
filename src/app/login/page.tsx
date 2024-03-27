"use client";
import React from "react";
import { Button, Form, Radio, message } from "antd";
import Link from "next/link";
import axios from "axios";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";


import '../stylesheets/commonClasses.css'
import '../stylesheets/antdOverride.css'
import '../stylesheets/antdOverride.css'



function Login() {

  const router = useRouter();

  const onFinish = async (values: any) => {
    try {
      const response = await axios.post("/api/users/login", values);
      message.success(response.data.message)
      router.push("./")
    } catch (error: any) {
      message.error(error.response.data.message || 'Something went wrong')
    }
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