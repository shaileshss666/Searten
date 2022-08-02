import React from "react";
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import history from '../../history';
import axios from 'axios'
import cookie from 'react-cookies'

import '../../mock/login'



export default class Login extends React.Component {

    state = {
        userState: 'login',
    };

    onTabChange = (key, type) => {
        console.log(type, key);
        this.setState({ [type]: key });
    };

    onLogin = (values) => {
        axios.post('/login',values).then(res=>{
            console.log(res.data)
            if(res.data.status===0){
                cookie.save('userId',res.data.dataset.id)
                cookie.save('username',res.data.dataset.username)
                cookie.save('email',values.email)
                alert(res.data.result);
                history.push("/projectmanagement")
            }else{
                alert(res.data.result);
            }
          }).catch((err)=>{
            console.log(err)
          })
         
    };

    onLoginFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    onSignin = (values) => {
        console.log('Success:', values);
    };

    onSigninFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    onLogout = () => {
        cookie.remove("userId");
        cookie.remove("email");
        cookie.remove("username");
        this.forceUpdate();
    }

    render() {
        if(cookie.load("userId")){
            return(
                <Card
                style={{ width: '100%' }}
                >
                    <Button onClick={this.onLogout}>Log out</Button>
                </Card>
            )
        }else{

        return (

            <Card
                style={{ width: '100%' }}
                tabList={[
                    {
                        key: 'login',
                        tab: 'Login',
                    },
                    {
                        key: 'signin',
                        tab: 'Signin',
                    }
                ]}
                activeTabKey={this.state.userState}
                onTabChange={key => {
                    this.onTabChange(key, 'userState');
                }}
            >
                {{
                    login: (
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 8,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onLogin}
                            onLoginFailed={this.onLoginFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Log In
                                </Button>
                            </Form.Item>
                        </Form>
                    ),
                    signin: (
                        <Form
                            name="basic"
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 8,
                            }}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={this.onSignin}
                            onLoginFailed={this.onSigninFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="emial"
                                name="emial"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your emial!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Sign In
                                </Button>
                            </Form.Item>
                        </Form>
                    )
                }[this.state.userState]}
            </Card>


        );
    }
    }



}







