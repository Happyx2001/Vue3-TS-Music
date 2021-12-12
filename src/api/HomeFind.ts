// 首页—发现
import request from "@/api/request";


// 首页—发现—全部模块
export function getFind() {
    return request({
        url: "/homepage/block/page",
        method: 'get',
    })
}

/**
 * 首页—发现—轮播图
 * @param type 获取的轮播图类型（默认1）
 */
export function getBanner(type: number = 0) {
    return request({
        url: `/banner?type=${type}`,
        method: 'get',
    })
}

// 首页—发现—圆形图标入口列表
export function getIconList() {
    return request({
        url: '/homepage/dragon/ball',
        method: 'get'
    })
}

/**
 * 首页—发现—推荐歌单
 * @param limit 获取歌单数量（默认10）
 */
export function getRecommendSongList(limit: number = 10) {
    return request({
        url: `/personalized?limit=${limit}`,
        method: 'get',
    })
}