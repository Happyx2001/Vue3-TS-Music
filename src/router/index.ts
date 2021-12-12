import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    // 动态引入Home
    component: ()=> import("../views/Home/Home.vue"),
    // 默认到 /home/find
    redirect: '/home/find',
    children: [
      {
        path: '/home/find',
        name: 'Find',
        component: ()=> import("../views/Home/Find/Find.vue")
      },
      {
        path: '/home/my',
        name: 'My',
        component: ()=> import("../views/Home/My/My.vue")
      },
      {
        path: '/home/video',
        name: 'Video',
        component: ()=> import("../views/Home/Video/Video.vue")
      },
      {
        path: '/home/community',
        name: 'Community',
        component: ()=> import("../views/Home/Community/Community.vue")
      }
    ]
  },
  {
    path: '/recommend',
    name: 'Recommend',
    component:()=>import("../views/Recommend/Recommend.vue"),
    children: [
      {
        path: '/recommend/song-list',
        name: 'SongList',
        component: ()=>import('../views/Recommend/SongList/SongList.vue')
      },
      {
        path: '/recommend/song',
        name: 'Song',
        component: ()=>import('../views/Recommend/Song/Song.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
