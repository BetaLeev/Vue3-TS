<template>
  <div class="app-container">
    <div class="user-tab">
      <ul class="user-sidebar">
        <li v-for="item in lib" :key="item" @click="selectedUser = item">
          {{ item.name }}
        </li>
      </ul>
      <div class="selected-user-container">
        <div class="selected-user" v-if="selectedUser">
          <h2>
            {{ selectedUser.name }}
          </h2>

          <p>
            {{ selectedUser.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class Home extends Vue {
  private selectedUser = "";
  private lib = [
    {
      id: 1,
      name: "波塞冬",
      content: "ssss",
    },
    {
      id: 2,
      name: "雅典娜",
      content: "ssss222",
    },
  ];
}
</script>
<style lang="less" scoped>
.app-container {
  width: 777px;
}
.user-tab {
  display: flex;
}
.selected-user-container {
  height: 233px;
  width: 333px;
}
</style>
