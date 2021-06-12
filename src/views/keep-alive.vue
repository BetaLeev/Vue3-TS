<template>
  <div class="home">
    <div class="app-container">
      <button v-for="item in tabs" :key="item" @click="currentTab = item">
        {{ item }}
      </button>
      <div class="tab-container">
        <keep-alive>
          <component :is="currentTabComponent"></component>
        </keep-alive>
      </div>
    </div>
    <button @click="add">+</button>
    {{ c }}
    <button @click="handleTo">跳转</button>
    <count ref="count" :count="c" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Count from "./TestKeepAlive.vue";
import TabUser from "@/components/TabContent.vue";
@Options({
  components: {
    Count,
    TabUser,
  },
})
export default class Home extends Vue {
  private tabs = ["user", "other"];
  private currentTab = "";
  private c = 0;

  get currentTabComponent(): string {
    return "tab-" + this.currentTab.toLowerCase();
  }
  private handleTo() {
    this.$router.push({
      name: "Example",
    });
  }

  private add() {
    this.c++;
  }
}
</script>
<style lang="less" scoped>
.app-container {
  height: 444px;
  background: aqua;

  .tab-container {
    height: 333px;
    width: 222px;
    background: salmon;
    margin: 0 auto;
  }
}
</style>
