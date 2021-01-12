import { Button, Form, Input } from 'antd'
import React from 'react'
import style from './Login.module.css'

function Login() {
    return (
        <div className={style.login}>
            <div className={style.loginForm}>
                <Form>
                    <Form.Item
                        label='Username'
                        name='name'
                        rules={[{
                            required: true,
                            message: 'Please input your username!'
                        }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label='Password'
                        name='password'
                        rules={[{
                            required: true,
                            message: 'Please input your password!'
                        }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login

