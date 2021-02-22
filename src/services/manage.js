import request from "./request"
import { getToken, getID } from "@/store/auth";

// export const getLiveList = () => {
//     return request({
//         url: "/getLiveList"
//     })
// }

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

// getVideos
export const getVideos = () => {
    return request({
        method: "post",
        url: "/searchVideo",
        data: {
            userId: getID(),
            token: getToken()
        }
    })
}

export const getLives = () => {
    return request({
        method: "post",
        url: "/searchLive",
        data: {
            userId: getID(),
            token: getToken()
        }
    })
}