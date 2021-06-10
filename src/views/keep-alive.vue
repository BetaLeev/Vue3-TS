<template>
  <div class="home">
    <button @click="add">+</button>
    {{ c }}
    <button @click="handleTo">跳转</button>
    <keep-alive>
      <count ref="count" :count="c" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Count from "./TestKeepAlive.vue";
@Options({
  components: {
    Count,
  },
})
export default class Home extends Vue {
  private c = 0;

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
