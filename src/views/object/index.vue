<template>
  <div>
    <h2>Object 方法</h2>

    <div class="object-container">
      <h3>input 双向数据绑定</h3>

      <input type="text" ref="input" @input="oninput" />

      <h2 id="input_text" ref="view"></h2>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class extends Vue {
  private oninput(): void {
    const inputElement = this.$refs.input as HTMLInputElement;
    const view = this.$refs.view as HTMLElement;
    view.innerHTML = inputElement.value;
  }

  private init() {
    const input = this.$refs.input as HTMLInputElement;

    console.log(input.value);

    const obj = {
      input_text: "",
    };

    // (input as HTMLInputElement).oninput = (val: string | number, ev: Event) => {
    //   console.log(val);
    // };

    // (input as HTMLInputElement).oninput = function () {
    //   console.log("44");
    // };
  }

  mounted() {
    this.init();
  }

  created() {
    // this.init();
  }
}
</script>
<style lang="less" scoped>
.object-container {
  height: 366px;
  width: 666px;
  margin: 0 auto;
  border: 1px solid rgb(0, 110, 255);
}
</style>
