<template>
  <div class="app">
    <h2 class="title">设计模式</h2>
    <div class="app-container">
      <header ref="headerMenu" :style="fixedStyle">
        <article
          v-for="item in partten"
          :key="item.id"
          @click="itemClickHandler(item.id)"
        >
          <h3
            :class="activeIndex === item.id ? 'plate__active' : ''"
            class="title"
          >
            {{ item.title }}
          </h3>
        </article>
      </header>
      <main ref="main" class="main-container" :style="contentStyle">
        <div
          class="plate-box"
          v-for="item in partten"
          :key="item.id"
          :ref="item.id"
        >
          <div class="plate-content">
            <p class="title">{{ item.title }}是</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class extends Vue {
  private activeIndex = "g";
  private mainContent: any[] = [];
  private partten = [
    {
      id: "g",
      title: "桥接模式",
    },
    {
      id: "f",
      title: "代理模式",
    },
    {
      id: "e",
      title: "装饰器模式",
    },
    {
      id: "d",
      title: "原型模式",
    },
    {
      id: "c",
      title: "过滤器模式",
    },
    {
      id: "b",
      title: "观察者模式",
    },
    {
      id: "a",
      title: "发布订阅模式",
    },
  ];

  private fixedStyle: any = null;
  private contentStyle: any = null;
  private itemClickHandler(id: string) {
    const scrollOptions = {
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    };
    const main = this.$refs[id] as any;
    console.log(id, "id");
    this.activeIndex = id;
    main?.scrollIntoView(scrollOptions);
  }

  private initScroll() {
    const headerMenu = this.$refs["headerMenu"] as any;
    const offsetTop = headerMenu.offsetTop;
    const scrollTop = document.documentElement.scrollTop;
    // 45px
    if (scrollTop >= offsetTop) {
      this.fixedStyle = {
        position: "fixed",
        top: "0px",
        zIndex: 2,
      };
    } else {
      this.fixedStyle = null;
    }

    let findObj = this.mainContent.find((item) => {
      if (scrollTop - item.top <= 50) {
        return item;
      }
    });
    if (findObj) {
      console.log(findObj, "find obj");
      this.activeIndex = findObj.id;
    }

    console.log(scrollTop, "scrollTop");
  }

  private caculateHeight() {
    let mainContent: any[] = [];
    this.partten.forEach((item) => {
      const top = (this.$refs[item.id] as any).offsetTop;
      mainContent.push({
        id: item.id,
        top: top,
      });
    });
    this.mainContent = mainContent;
    console.log(mainContent, "main content ");
  }

  mounted() {
    // this.initScroll();
    this.caculateHeight();
    window.addEventListener("scroll", () => {
      this.initScroll();
    });
  }

  // created() {}
}
</script>
<style lang="less" scoped>
.app-container {
  display: flex;
  flex-direction: column;
  // height: 888px;
  // overflow-y: scroll;
}
header {
  display: flex;
  // margin: 10px 0px;
  width: 900px;
  padding: 10px;
  height: 99px;
  background-color: cornflowerblue;
  .title {
    margin-right: 16px;
    padding: 10px;
    border: 1px solid palegreen;
    cursor: pointer;
  }
  .plate__active {
    color: red;
  }
}
main {
  background-color: rgb(241, 220, 179);
  width: 920px;
  .plate-box {
    padding: 10px;
    box-sizing: border-box;
    margin: 10px;
  }
  .plate-content {
    border: 1px solid plum;
    height: 333px;
    width: 100%;
    margin: 13px 0px;
    margin-top: 140px;
    border-radius: 3px;
  }
}
</style>
