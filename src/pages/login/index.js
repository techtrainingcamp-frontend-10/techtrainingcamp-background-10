import React, { memo } from 'react'
import LoginForm from './LoginForm'

export default memo(function Login() {
    return (
        <div>
            <h2>登录</h2>
            <LoginForm />
        </div>
    )
})
