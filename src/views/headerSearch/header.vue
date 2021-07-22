<template>
  <div>
    <input type="text" v-model="form.search" />
    <select name="" id="" v-model="form.user">
      <option :value="item.id" v-for="item in userOptions" :key="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { Watch, Emit, Prop } from "vue-property-decorator";
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class extends Vue {
  @Prop({}) userId!: 0;
  private form: any = {
    search: "",
    user: 4,
  };

  private userOptions = [
    { name: "杜梅竹", age: 12, id: 1 },
    { name: "迪丽热酒", age: 12, id: 2 },
    { name: "杨幂", age: 12, id: 3 },
    { name: "孙俪", age: 12, id: 4 },
  ];

  @Emit("refresh")
  onRefresh() {
    return { ...this.form };
  }

  @Watch("userId", { immediate: true })
  onUserIdChanged(val: any) {
    if (val) {
      this.form.user = val;
      console.log(this.form);
    }
  }

  @Watch("form.search")
  onSearchChanged(val: any) {
    this.onRefresh();
  }

  @Watch("form.user")
  onSearchUserChanged(val: any) {
    this.onRefresh();
  }
}
</script>
<style lang="less" scoped></style>
