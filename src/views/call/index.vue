<template>
  <div>
    <div class="plate">
      <h3 class="title">模拟实现call</h3>
      <div class="plate-container"></div>
    </div>
    <div class="plate">
      <h3 class="title">模拟实现apply</h3>
      <div class="plate-container"></div>
    </div>
    <div class="plate">
      <h3 class="title">模拟实现bind</h3>
      <div class="plate-container"></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class extends Vue {}
</script>
<style lang="less" scoped>
.plate {
  margin-bottom: 32px;
}
</style>
