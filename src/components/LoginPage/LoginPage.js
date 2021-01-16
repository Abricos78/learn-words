import { Alert, Button, Form, Input } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react'
import FirebaseContext from '../../firebaseContext';
import style from './Login.module.css'
import { Link } from 'react-router-dom';

class LoginPage extends React.PureComponent {
    state = {
        errorMsg: null
    }
    
    handleSubmit = async ({email, password}) => {
        const { signWithEmail, setUserUid } = this.context
        const { history } = this.props

        let response = await signWithEmail(email, password)
        
        if (response.user.uid) {
            setUserUid(response.user.uid)
            history.push('/')
        } else {
            console.log('Error message: ', response.message)
            this.setState({
                errorMsg: response.message
            })
            setTimeout(() => {
                this.setState({
                    errorMsg: null
                })
            }, 3000)
        }
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
                        name="email"
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
                </div>
            </div>
        )
    }

}
LoginPage.contextType = FirebaseContext


export default LoginPage

