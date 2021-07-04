<template>
  <div>
    <h2>strapi</h2>
    <div>
      <div v-for="category in categories" :key="category.id">
        {{ category.name }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
@Options({
  components: {},
})
export default class extends Vue {
  private categories = [];
  async created() {
    const { status, data } = await (axios as any).get(
      "http://localhost:1337/Categories"
    );

    this.categories = data;
    // const result = await getStriApi();
    // console.log(result, "result");
  }
}
</script>
<style lang="less" scoped></style>
