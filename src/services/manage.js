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
        url: "/managerLogin",
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

export const createLive = (title, url) => {
    return request({
        method: "post",
        url: "/createLive",
        data: {
            videoName: title,
            url: url,
            controller: getID()
        }
    })
}

export const createVideo = (title, url) => {
    return request({
        method: "post",
        url: "/createVideo",
        data: {
            videoName: title,
            url: url,
            controller: getID()
        }
    })
}

export const deleteVideo = (id) => {
    return request({
        method: "post",
        url: "/delete",
        data: {
            videoId: id,
            judge: "video",
            controller: getID()
        }
    })
}

export const deleteLive = (id) => {
    return request({
        method: "post",
        url: "/delete",
        data: {
            videoId: id,
            judge: "live",
            controller: getID()
        }
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

export const uploadFile = (file) => {
    return request({
        method: "post",
        url: "/fileUpload",
        data: {
            file: file
        }
    })
}