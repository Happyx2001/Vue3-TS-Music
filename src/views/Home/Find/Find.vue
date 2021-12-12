<template>
  <!--  轮播图组件  -->
  <find-swipe></find-swipe>
  <!--  图标列表  -->
  <icon-list></icon-list>
  <!--  推荐歌单  -->
  <recommend-song-list/>
</template>

<script lang="ts">
import FindSwipe from "@/views/Home/Find/childComponents/FindSwipe.vue";
import IconList from "@/views/Home/Find/childComponents/IconList.vue"
import RecommendSongList from "@/views/Home/Find/childComponents/RecommendSongList.vue"
import {getFind} from "@/api/HomeFind";
import {defineComponent, onMounted} from "vue"

export default defineComponent({
  name: "Find",
  components: {FindSwipe, IconList, RecommendSongList},
  setup() {


    onMounted(() => {
      findData()
    })

    // 请求数据
    const findData = async () => {
      const res = await getFind()
      console.log(res, 'findData')
    }
  }
})
</script>

<style scoped>

</style>