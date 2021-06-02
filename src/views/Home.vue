<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
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
  async getList(): Promise<void> {
    let ary = [1, 2, 3, 4, 5, 6, 7, 8];
    const list = await new Promise((res) => {
      setTimeout(() => {
        res(ary);
      }, 2000);
    });
    let myList = JSON.stringify(list);
    localStorage.setItem("list", myList);
  }

  created(): void {
    this.getList();
  }
}
</script>
