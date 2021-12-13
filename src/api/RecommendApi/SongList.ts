// 歌单推荐相关API
import request from "@/api/request";

// 获取歌单详情
export function getSongListDetail(id: number) {
    return request({
        url: `/playlist/detail?id=${id}`,
        method: 'get'
    })
}

// 获取歌单歌曲
export function getSongListAll(id: number) {
    return request({
        url: `/playlist/track/all?id=${id}`,
        method: 'get'
    })
}