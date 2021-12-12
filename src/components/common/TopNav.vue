<template>
  <div class="top-nav">
    <div class="top-left">
      <van-icon name="ellipsis" size="0.45rem"/>
    </div>
    <div class="top-center">
      <span class="nav-btn">我的</span>
      <span class="nav-btn">发现</span>
      <span class="nav-btn">云村</span>
      <span class="nav-btn">视频</span>
    </div>
    <div class="top-right">
      <van-icon name="search" size="0.45rem"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
}
</script>

<style scoped lang="less">
.top-nav {
  width: 7.5rem;
  height: 1rem;
  padding:0 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .top-center {
    width: 4.5rem;
    display: flex;
    justify-content: space-between;

    .active {
      font-weight: 900;
    }
  }
}

</style>