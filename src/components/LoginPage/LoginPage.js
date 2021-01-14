import { Alert, Button, Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react'
import { fire } from '../../firebase';
import FirebaseContext from '../../firebaseContext';
import style from './Login.module.css'
import { Link } from 'react-router-dom';

class LoginPage extends React.PureComponent {
    state = {
        errorMsg: null
    }
    
    handleSubmit = ({email, password}) => {
        const { signWithEmail } = this.context
        debugger
        signWithEmail(email, password)
        .then(response => response.user)
        .catch(error => {
            console.log('Error message: ', error.message)
            this.setState({
                errorMsg: error.message
            })
            setTimeout(() => {
                this.setState({
                    errorMsg: null
                })
            }, 3000)
        })
    }

    finishFailed = errorMsg => {
        debugger
        console.log('Failed: ', errorMsg)
    }

    render() {

        if (this.state.errorMsg) {
            return <div className={style.alert}>
            <Alert
                message="Error Text"
                description={this.state.errorMsg}
                type="error"
            />
            </div>

        }

        const layout = {
            labelCol: {
              span: 0,
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
            <div className={style.loginPage}>
                <div className={style.login}>
                    <Form
                        name="normal_login"
                        className={style.loginForm}
                        initialValues={{
                        remember: true,
                        }}
                        onFinish={this.handleSubmit}
                        onFinishFailed={this.finishFailed}
                    >
                    <Form.Item
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                        ]}
                    >
                        <Input prefix={<UserOutlined className={style.siteFormItemIcon} />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className={style.siteFormItemIcon} />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className={style.loginFormButton}>
                            Log in
                        </Button>
                        Or <Link to='/register'>register now!</Link>
                    </Form.Item>
                </Form>























                    {/* <Form
                        {...layout}
                        initialValues={{
                            remember: true,
                          }}
                        name='basic'
                        onFinish={this.handleSubmit}
                        onFinishFailed={this.finishFailed}
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
                                Submit
                            </Button>
                            
                        </Form.Item>
                    </Form>
                    Or <a href="">register now!</a> */}
                </div>
            </div>
        )
    }

}
LoginPage.contextType = FirebaseContext


export default LoginPage

