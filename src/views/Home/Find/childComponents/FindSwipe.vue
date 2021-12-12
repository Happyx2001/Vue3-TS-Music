<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="orangered">
    <van-swipe-item v-for="item in bannerData.data" :key="`IMG_${item.imageUrl}`">
      <img :src="item.imageUrl">
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive} from "vue";
import {getBanner} from "@/api/HomeFind";

export default defineComponent({
  name: "FindSwipe",
  setup() {
    let bannerData = reactive<any>({
      data: []
    })

    // 在 mounted 中获取数据
    onMounted(() => {
      getBannerData()
    })

    const getBannerData = async () => {
      const res = await getBanner()
      console.log(res, 'bannerData')
      bannerData.data = res.banners
      console.log(bannerData.data)
    }

    return {
      bannerData
    }
  }
})
</script>

<style scoped lang="less">
.my-swipe {
  height: 3rem;

  .van-swipe-item {
    padding: 0 0.2rem;
    overflow: hidden;

    img {
      border-radius: 0.4rem;
      width: 100%;
      height: 3rem;
    }
  }
}
</style>