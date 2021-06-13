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
    <button @click="handleTo">跳转</button>
    <keep-alive>
      <count ref="count" :count="c" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Count from "./TestKeepAlive.vue";
import TabUser from "@/components/TabContent.vue";
import TabOther from "@/components/OtherContent.vue";
@Options({
  components: {
    Count,
    TabUser,
    TabOther,
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

  activated(): void {
    console.log("activated");
  }

  deactivated(): void {
    console.log("deactivated");
  }
  created(): void {
    console.log("created");
  }
}
</script>
<style lang="less" scoped>
.app-container {
  height: 444px;
  background: aqua;

  .tab-container {
    height: 333px;
    width: 522px;
    margin: 0 auto;
  }
}
</style>
