<template>
  <div class="recommend-top">
    <div class="top-left">
      <van-icon name="arrow-left" @click="$router.go(-1)" size="0.5rem"/>
      <span class="text">歌单</span>
    </div>
    <div class="top-right">
      <van-icon name="search" size="0.5rem" class="search"/>
      <van-icon name="ellipsis" size="0.5rem"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendTop"
}
</script>

<style scoped lang="less">
.recommend-top {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 1.2rem;
  font-size: 0.6rem;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem;
  color: #ffffff;

  .top-left {
    display: flex;
    align-items: center;

    span {
      margin-left: 0.4rem;
      font-size: 0.4rem;
    }
  }

  .top-right .search {
    margin-right: 0.4rem;
  }
}
</style>