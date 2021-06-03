<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ intersection }}
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <p
      v-for="(item, index) in tabBtns"
      :key="item"
      @click="deleteHandler(index)"
    >
      {{ item }}
    </p>

    <div class="tab-content"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private tabBtns = [1, 2, 3, 4];
  private tabs = [
    { tab: 1, content: "1111" },
    { tab: 2, content: "2222" },
    { tab: 3, content: "3333" },
  ];

  private deleteHandler(index: number) {
    this.tabBtns.splice(index, 1);
  }

  // get tabBtns(): unknown[] {
  //   return this.tabs.map((item) => item.tab);
  // }
  async getList(): Promise<void> {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8];
    const list = await new Promise((res) => {
      setTimeout(() => {
        res(ary);
      }, 2000);
    });
    console.log(list);
  }

  get intersection(): unknown[] {
    let a: number[] = [20, 21, 22, 23];
    let b = [
      { name: "Charlotte", age: 20 },
      { name: "Nova", age: 22 },
      { name: "Isabella", age: 31 },
      { name: "Isla", age: 33 },
    ];
    let c: unknown[] = b.filter((item) => a.includes(item.age));
    return c;
  }

  created(): void {
    this.getList();
  }
}
</script>
