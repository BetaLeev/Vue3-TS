<template>
  <div class="home">
    <h2>十大经典排序算法</h2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "count",
  props: {
    count: Number,
  },
  components: {},
})
export default class Count extends Vue {}
</script>
