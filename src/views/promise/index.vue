<template>
  <div>
    <h2 class="title">Promise</h2>
    <main>
      <article></article>
    </main>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import myPromise from "./promise";
@Options({
  components: {},
})
export default class extends Vue {
  init() {
    // let p = new myPromise((resolve: any) => {
    //   setTimeout(() => {
    //     resolve("5秒");
    //   }, 5000);
    // });
    // console.log(p, "pppp");
  }
  created() {
    this.init();
  }
}
</script>
<style lang="less" scoped></style>
