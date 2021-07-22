<template>
  <div>
    <div class="plate">
      <h3 class="title">模拟实现call</h3>
      <div class="plate-container">
        <p>{{ user.name }}</p>
        <p>{{ user.age }}</p>
        <p>{{ user.sex }}</p>
      </div>

      <div class="plate-">
        <p>{{ userB.name }}</p>
        <p>{{ userB.age }}</p>
        <p>{{ userB.sex }}</p>
      </div>
    </div>
    <div class="plate">
      <h3 class="title">模拟实现apply</h3>
      <div class="plate-container">
        <button @click="changeObject">change</button>
      </div>
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
export default class extends Vue {
  private user: any = {
    name: "leev",
    age: 88,
    sex: ["a", "b", "c"],
  };

  private userB = Object.assign({}, this.user);

  private changeObject(): void {
    this.user.age += 1;
    const v = Math.random();
    this.user.sex.push(v);
  }
}
</script>
<style lang="less" scoped>
.plate {
  margin-bottom: 32px;
}
</style>
