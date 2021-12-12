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
    <div class="list-item" v-for="item in recommendSongListData.data" :key="item.id">
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

<script>
import {getRecommendSongList} from "@/api/HomeFind";
import {numberConversion} from "@/utils";
import {defineComponent, onMounted, reactive} from "vue";

export default defineComponent({
  name: "RecommendSongList",
  setup() {

    const recommendSongListData = reactive({
      data: []
    })

    onMounted(() => {
      getRecommendSongListData()
    })

    const getRecommendSongListData = async () => {
      const res = await getRecommendSongList()
      console.log(res, 'songs')
      // 数字单位转换
      res.result.forEach(item => {
        item.playCount = numberConversion(item.playCount)
      })
      recommendSongListData.data = res.result
    }

    return {
      recommendSongListData
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