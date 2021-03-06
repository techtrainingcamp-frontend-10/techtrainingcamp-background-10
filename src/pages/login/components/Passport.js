
import { login } from "@/services/manage";

import { notification } from 'antd';

const openNotificationWithIcon = type => {
    notification[type]({
        message: '登录失败',
        description:
            '请检查您的用户名和密码输入是否正确',
    });
};

export default class Passport {
    constructor() {
        // 用户登录标识
        this.isLogin = false;
    }

    login(username, password, callback) {
        // if (username === 'yejiahao' && password === '123') {
        //     // 登录成功
        //     this.isLogin = true;
        //     // 将登录成功之后的操作给调用者处理
        //     callback();
        // } else {
        //     // 登录失败
        //     // 这里简单弹出一个消息
        //     alert('登录失败！');
        // }
        login(username, password).then(res => {
            console.log(res);
            if (!res.success) { throw (new Error('login failed')) }
            this.isLogin = true;
            callback(res);
        }).catch(err => {
            alert('登录失败')
            openNotificationWithIcon('error')
        })
    }
}
