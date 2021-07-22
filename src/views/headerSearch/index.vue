<template>
  <div>
    <HeaderSearch :userId="userId" @refresh="refreshHandler" />

    <div class="content">
      <button @click="changeUser">change user</button>
      <p>
        search data was <span>{{ dataParams.search }}</span>
      </p>

      <p>
        selected user <span>{{ dataParams.user }}</span>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import HeaderSearch from "./header.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { HeaderSearch },
})
export default class extends Vue {
  private userId = 2;
  private dataParams: any = {
    search: "",
    user: "",
  };

  private changeUser() {
    this.userId = 3;
    console.log(this.userId, "ssss");
  }

  private refreshHandler(params: any) {
    this.dataParams = Object.assign({}, params);
    console.log(this.dataParams, "ddd");
  }
}
</script>
<style lang="less" scoped></style>
