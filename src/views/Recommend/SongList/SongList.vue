<template>
  <!--  顶部模块  -->
  <recommend-top></recommend-top>
  <!-- 背景模糊 -->
  <img :src="detailData.coverImgUrl" alt="" class="cover-img">

  <!-- 歌单详情模块 -->
  <div class="content">
    <div class="content-left">
      <img :src="detailData.coverImgUrl" alt="">
    </div>
    <div class="content-right">
      <h3>{{ detailData.name }}</h3>
      <div class="author">
        <img :src="detailData.creator?.avatarUrl" alt="" class="author-header">
        <span >{{ detailData.creator?.nickname }}</span>
      </div>
      <div class="van-multi-ellipsis--l2 description">
        {{ detailData.description }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import RecommendTop from "@/components/common/RecommendTop.vue"
import {getSongListDetail, getSongListAll} from "@/api/RecommendApi/SongList";
import {defineComponent, onMounted, reactive, toRefs} from "vue";
import {Notify} from "vant";
// Vue3使用路由，需要先引入 useRoute、useRouter
import {useRoute, useRouter} from 'vue-router'

export default defineComponent({
  name: "SongList",
  components: {RecommendTop},
  setup() {
    // 储存当前的歌单页面的ID
    let songId = undefined
    // 储存歌单详情、歌单歌曲
    const data = reactive<any>({
      detailData: {},
      songList: []
    })

    const route = useRoute()

    // 生命周期 mounted
    onMounted(() => {
      songId = Number(route.query.id)
      console.log(songId)
      getSongListDetailData(songId)
      getSongListAllData(songId)
    })

    const getSongListDetailData = async (id: number) => {
      const res: any = await getSongListDetail(id)
      if (res.code != 200) {
        Notify({type: 'danger', message: '获取歌单详情失败'});
      } else {
        console.log(res, '歌单详情')
        data.detailData = res.playlist
      }
    }

    const getSongListAllData = async (id: number) => {
      const res: any = await getSongListAll(id)
      if (res.code != 200) {
        Notify({type: 'danger', message: '获取歌单歌曲失败'})
      } else {
        console.log(res, '歌单歌曲')
        data.songList = res.songs
      }
    }

    return {
      ...toRefs(data)
    }
  }
})
</script>

<style scoped lang="less">
.cover-img {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  filter: blur(20px);
  opacity: 0.8;
}

.content {
  display: flex;
  justify-content: space-between;
  margin: 1.6rem 0.4rem 0.4rem;

  .content-left {
    position: relative;

    img {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.1rem;
    }
  }

  .content-right {
    width: 3.5rem;

    h3 {
      color: #ffffff;
    }

    .author {
      display: flex;
      align-items: center;
      margin: 0.2rem 0;

      .author-header {
        height: 0.6rem;
        width: 0.6rem;
        border-radius: 50%;
        margin-right: 0.2rem;
      }
    }

    .description {
      font-size: 0.24rem;
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
  }
}
</style>