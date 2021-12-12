<template>
  <div class="home">
    <top-nav/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import TopNav from '../../components/common/TopNav.vue'
import {defineComponent} from "vue";

export default defineComponent({
  components: {TopNav}
})
</script>
<style scoped lang="less">
.home {
  height: 100%;
}
</style>
