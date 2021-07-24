<template>
  <div>
    <div class="plate">
      <h3 class="title">防抖</h3>
      <div class="plate-container">
        <p>{{ count }}</p>
        <p>ts中的声明</p>
        <button @click="debounceClickHandler">防抖函数</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import { debounce } from "throttle-debounce";

@Options({
  components: {},
})
export default class extends Vue {
  private count = 0;
  // private debounceClickHandler = () => debounce(2000, this.clickHandler);
  private clickHandler() {
    this.count += 1;
  }
}
</script>
<style lang="less" scoped></style>
