import request from "./request"

export const getLiveList = () => {
    return request({
        url: "/getLiveList"
    })
}