import React, { memo } from 'react'
import UserLogin from './components/UserLogin'

export default memo(function Login() {
    return (
        <div>
            <h2>登录</h2>
            <UserLogin />
        </div>
    )
})
