import { Button, Form, Input } from 'antd'
import React from 'react'
import { fire } from '../../firebase';
import style from './Login.module.css'

function Login() {
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 20,
        },
    };
    const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 16,
        },
      };
    
    const handleSubmit = ({email, password}) => {
        fire.auth().signInWithEmailAndPassword(email, password)
        .then(response => response.user)
    }

    const finishFailed = errorMsg => {
        console.log('Failed: ', errorMsg)
    }
    return (
        <div className={style.login}>
            <div className={style.loginForm}>
                <Form
                    {...layout}
                    initialValues={{
                        remember: true,
                      }}
                    name='basic'
                    onFinish={handleSubmit}
                    onFinishFailed={finishFailed}
                >
                    <Form.Item
                        label='Email'
                        name='email'
                        rules={[{
                            required: true,
                            message: 'Please input your email!'
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
                    <Form.Item
                        {...tailLayout}
                    >
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Login

