<template>
  <div class="hello">
    <p>hello world components</p>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <p>{{ list || li }}</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  private age = 13;
  get name(): string {
    return "leev";
  }
  get list(): [] {
    return JSON.parse(localStorage.getItem("list") || "[]");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
