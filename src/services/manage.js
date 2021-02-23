import request from "./request"
import { getID } from "@/store/auth";

// mock
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
        url: "/searchVideo"
    })
}

export const getLives = () => {
    return request({
        method: "post",
        url: "/searchLive"
    })
}

export const createLive = (title, des) => {
    return request({
        method: "post",
        url: "/createLive",
        data: {
            videoName: title,
            url: des,
            controller: getID()
        }
    })
}

export const createVideo = () => {
    return request({
        method: "post",
        url: "/createVideo"
    })
}

export const getComment = (id) => {
    return request({
        method: "post",
        url: "/getComment",
        data: {
            videoId: id
        }
    })
}