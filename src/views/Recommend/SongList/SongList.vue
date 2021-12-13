<template>
    <!--  顶部模块  -->
    <recommend-top></recommend-top>
    <img :src="data.detailData.coverImgUrl" alt="" class="cover-img">
</template>

<script lang="ts">
import RecommendTop from "@/components/common/RecommendTop.vue"
import {getSongListDetail, getSongListAll} from "@/api/RecommendApi/SongList";
import {defineComponent, onMounted, reactive} from "vue";
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

    onMounted(() => {
      songId = Number(route.query.id)
      console.log(songId)
      getSongListDetailData(songId)
      getSongListAllData(songId)
    })

    const getSongListDetailData = async (id: number) => {
      const res: any = await getSongListDetail(id)
      console.log(res, '歌单详情')
      data.detailData = res.playlist
    }

    const getSongListAllData = async (id: number) => {
      const res: any = await getSongListAll(id)
      console.log(res, '歌单歌曲')
      data.songList = res.songs
    }

    return {
      data
    }
  }
})
</script>

<style scoped lang="less">
.cover-img {
  position: relative;
  z-index: -1;
  width: 100%;
  filter: blur(10px);
  opacity: 0.8;
}
</style>