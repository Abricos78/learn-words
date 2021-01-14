import React from 'react'
import style from './Register.module.css'
import { Alert, Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom';
import FirebaseContext from '../../firebaseContext';

class Register extends React.PureComponent {

    handleSubmit = ({email, password}) => {
        const { registerUser, setUserUid } = this.context
        debugger
        registerUser(email, password).then(user => setUserUid(user.uid))
        debugger
    }

    render() {
        const layout = {
            labelCol: {
              span: 7,
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
        return (
            <div className={style.registerPage}>
                <div className={style.register}>
                    <Form
                        {...layout}
                        initialValues={{
                            remember: true,
                          }}
                        name='basic'
                        onFinish={this.handleSubmit}
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
                            <Button type='primary' htmlType='submit' className="login-form-button">
                                Register
                            </Button>
                            <div>
                                Or <Link to='/'>back login!</Link>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }

}

Register.contextType = FirebaseContext

export default Register
