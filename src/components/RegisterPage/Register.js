import React from 'react'
import style from './Register.module.css'
import { Button, Form, Input } from 'antd'
import { Link } from 'react-router-dom';
import FirebaseContext from '../../firebaseContext';

class Register extends React.PureComponent {

    handleSubmit = async ({email,password}) => {
        const {registerUser,setUserUid} = this.context
        const { history } = this.props

        let user = await registerUser(email, password)
        
        setUserUid(user.uid)
        history.push('/')
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
            <div className = {style.registerPage} >
                <div className = {style.register} >
                    <Form {...layout}
                        initialValues = {{
                            remember: true,
                        }}
                        name = 'basic'
                        onFinish = {this.handleSubmit} 
                    >
                        <Form.Item 
                            label = 'Email'
                            name = 'email'
                            rules = {[{
                                required: true,
                                message: 'Please input your email!'
                            }]} 
                        >
                            <Input / >
                        </Form.Item> 
                        <Form.Item 
                            label = 'Password'
                            name = 'password'
                            rules = {[{
                                required: true,
                                message: 'Please input your password!'
                            }]} 
                        >
                            <Input.Password / >
                        </Form.Item> 
                        <Form.Item 
                            {...tailLayout} 
                        >
                            <Button type = 'primary' htmlType = 'submit' className = "login-form-button" >
                                Register 
                            </Button> 
                            <div >
                                Or <Link to = '/' > back login! </Link> 
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