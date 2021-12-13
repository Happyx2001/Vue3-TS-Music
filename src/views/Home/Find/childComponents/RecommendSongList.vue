<template>
  <div class="title">
    <div class="title-left">
      发现好歌单
    </div>
    <div class="title-right">
      查看更多
    </div>
  </div>
  <div class="song-list">
    <div
        class="list-item"
        v-for="item in recommendSongListData.data"
        :key="item.id"
        @click="goSongList(item.id)">
      <img :src="item.picUrl" :alt="item.name" class="song-img">
      <div class="song-name">
        {{ item.name }}
      </div>
      <div class="play-count">
        <i class="iconfont icon-bofangsanjiaoxing"></i>
        <span>{{ item.playCount }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {getRecommendSongList} from "@/api/HomeApi/HomeFind";
import {numberConversion} from "@/utils";
import {defineComponent, onMounted, reactive} from "vue";
// Vue3使用路由，需要先引入 useRoute、useRouter
import {useRoute, useRouter} from 'vue-router'

export default defineComponent({
  name: "RecommendSongList",
  setup() {
    onMounted(() => {
      getRecommendSongListData()
    })

    // 获取推荐歌单数据
    const recommendSongListData = reactive({
      data: []
    })

    const getRecommendSongListData = async () => {
      const res: any = await getRecommendSongList()
      console.log(res, 'songs')
      // 数字单位转换
      res.result.forEach((item: any) => {
        item.playCount = numberConversion(item.playCount)
      })
      recommendSongListData.data = res.result
    }

    // 点击推荐歌单列表跳转到对应歌单
    const router = useRouter()  // 相当于Vue2 = this.$router()

    const goSongList = (id: number) => {
      router.push({path: '/recommend/song-list', query: {id: id}})
    }
    return {
      recommendSongListData,
      goSongList
    }
  }
})
</script>

<style scoped lang="less">
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
  margin-bottom: 0.2rem;

  .title-left {
    font-size: 0.4rem;
    font-weight: 800;
  }

  .title-right {
    font-size: 0.24rem;
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    padding: 0.05rem 0.1rem;
  }
}

.song-list {
  padding-left: 0.2rem;
  // 设置横向滚动
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  display: -webkit-box;
  white-space: nowrap;
  // 添加伪元素、隐藏横向滚动条
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  .list-item {
    position: relative;
    margin: 0 0.2rem 0 0;
    width: 2.4rem;

    .song-img {
      width: 100%;
      height: 2.4rem;
      border-radius: 0.3rem;
    }

    .song-name {
      width: 2.5rem;
      font-size: 0.24rem;
      white-space: pre-wrap;
    }

    .play-count {
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      font-size: 0.24rem;
      line-height: 0.24rem;
      color: #ffffff;
      z-index: 99;

      i {
        position: absolute;
        left: -0.24rem;
        bottom: 0.02rem;
        font-size: 0.24rem;
      }
    }
  }
}
</style>