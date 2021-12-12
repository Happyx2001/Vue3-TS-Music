<template>
  <div class="icon-list">
    <div class="icon-list-item" v-for="item in iconListData.data" :key="item.id">
      <img :src="item.iconUrl" alt="" class="icon-img">
      <div class="icon-name">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent, onMounted, reactive} from "vue";
import {getIconList} from "@/api/HomeFind";

export default defineComponent({
  name: "IconList",
  setup() {

    const iconListData = reactive({
      data: []
    })

    onMounted(() => {
      getIconListData()
    })

    const getIconListData = async () => {
      const res = await getIconList()
      console.log(res, 'iconList')
      iconListData.data = res.data
    }

    return {
      iconListData
    }
  }
})
</script>

<style scoped lang="less">
.icon-list {
  margin: 0.3rem 0 0 0;
  // 设置横向滚动
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  display: -webkit-box;
  white-space: nowrap;
  text-align: center;
  // 添加伪元素、隐藏横向滚动条
  &::-webkit-scrollbar {
    width: 0 !important;
  }

  .icon-list-item {
    margin: 0 0.2rem;
    .icon-img {
      width: 1rem;
      height: 1rem;
      background-color: red;
      border-radius: 50%;
    }
    .icon-name {
      font-size: 0.28rem;
    }
  }
}
</style>