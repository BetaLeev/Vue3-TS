<template>
  <div class="home">
    {{ count }}
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
