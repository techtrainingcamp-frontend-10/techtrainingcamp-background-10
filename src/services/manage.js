import request from "./request"

export const getLiveList = () => {
    return request({
        url: "/getLiveList"
    })
}

// login
export const login = (userName, password) => {
    return request({
        url: "/login",
        data: {
            userName: userName,
            password: password
        }
    })
}