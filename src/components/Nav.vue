<template>
  <div class="nav-bar">
    <div
      v-for="(item, index) in router"
      :key="item.value"
      class="tab-bar"
      @click="handleActive($event, index)"
      :class="{ 'tab-bar__active': index === active }"
    >
      <p>{{ item.name }} - {{ index }}</p>
      <p>{{ active }}</p>
      <div
        class="tab-bar__border"
        :class="index === active ? animateDirect : null"
        :style="border"
      ></div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";
@Options({
  components: {},
})
export default class extends Vue {
  private active = 0;
  private router = [
    {
      name: "leev",
      value: 1,
    },
    {
      name: "lee2",
      value: 2,
    },
    {
      name: "lee3",
      value: 3,
    },
  ];

  get now() {
    return true;
  }

  private animateDirect = "tab-bar__border__default";

  @Watch("active")
  onActiveChanged(val: number, old: number): void {
    if (val !== old) {
      if (val > old) {
        this.animateDirect = "tab-bar__border__from__left";
      } else {
        this.animateDirect = "tab-bar__border__from__right";
      }
    }
  }

  private border: { width: string; left: string } = {
    width: "",
    left: "",
  };
  private handleActive(event: MouseEvent, index: number) {
    this.active = index;
    const { left, width } = (
      event.target as HTMLElement
    ).getBoundingClientRect();
    this.border.width = width + "px";
    this.border.left = left + -8 + "px";
    console.log(left, width);
  }
}
</script>
<style lang="less" scoped>
.nav-bar {
  height: 333px;
  width: 444px;
  background: rgb(133, 247, 167);
  display: flex;

  .tab-bar {
    width: 144px;
    cursor: pointer;
    font-size: 23px;
  }
  .tab-bar__active {
    color: red;
  }
  .tab-bar__border {
    &__default {
      border: 1px solid rgb(226, 63, 14);
    }
    &__from__left {
      animation: left-to-right 0.3s linear;
      animation-iteration-count: 1;
      overflow: hidden;
      border: 1px solid rgb(226, 63, 14);
    }
    &__from__right {
      animation: right-to-left 0.3s linear;
      animation-iteration-count: 1;
      overflow: hidden;
      border: 1px solid rgb(226, 63, 14);
    }
  }

  @keyframes left-to-right {
    0% {
      margin-left: -100%;
    }

    100% {
      margin-left: 0%;
    }
  }

  @keyframes right-to-left {
    0% {
      margin-left: 100%;
    }

    100% {
      margin-right: 100%;
    }
  }
}
</style>
