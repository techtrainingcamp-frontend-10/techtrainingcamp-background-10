import request from "./request"

export const getLiveList = () => {
    return request({
        url: "/getLiveList"
    })
}

export const login = (userName, password) => {
    return request({
        url: "/login",
        data: {
            userName: userName,
            password: password
        }
    })
}