<template>
  <div class="user-tab">
    <ul class="user-sidebar">
      <li
        :class="['tab-nav', { 'tab-nav__active': selectedUser === item }]"
        v-for="item in lib"
        :key="item"
        @click="selectedUser = item"
      >
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
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class Home extends Vue {
  private selectedUser = "";
  private lib = [
    {
      id: 1,
      name: "宙斯",
      content:
        "统治世间万物至高无上的天神，奥林匹斯十二主神之首。是希腊神话中最伟大的神。",
    },
    {
      id: 2,
      name: "赫拉",
      content:
        "拥有一双炯炯有神和洞察一切事物的大眼睛，臂膀洁白如百合，一头秀美的卷发从王冠下边泻出，流露出威严而安详的神情",
    },
    {
      id: 3,
      name: "波塞冬",
      content:
        "掌管马匹的神，传说他给予了人类第一匹马，他的坐骑是白马驾驶的黄金战车，他是宙斯和哈迪斯的兄弟",
    },
    {
      id: 4,
      name: "雅典娜",
      content:
        "她也是艺术女神，手工艺的保护神，她传授人类纺织、园艺、陶艺等工艺；绘画、音乐、诗歌等艺术",
    },
    {
      id: 5,
      name: "阿波罗",
      content:
        "光明、预言、音乐和医药之神，消灾解难之神。同时也是人类文明、迁徙和航海者的保护神。",
    },
    {
      id: 6,
      name: "阿尔忒弥斯",
      content: "狩猎女神，被称为“野兽的女主人与荒野的领主”",
    },
    {
      id: 7,
      name: "阿佛洛狄忒",
      content:
        "生于海中浪花，拥有白瓷般的肌肤、金发碧眼和古希腊女性完美的身材和相貌，象征女性的美丽，被认为是女性身体美的最高象征",
    },
    {
      id: 8,
      name: "阿瑞斯 ",
      content:
        "是战争、兵变、杀戮与暴乱之神。他被形容为“嗜血成性的杀人魔王以及有防卫的城堡的征服者”",
    },
  ];
}
</script>
<style lang="less" scoped>
ul li {
  list-style-type: none;
}
.app-container {
  width: 777px;
}
.user-tab {
  margin-top: 20px;
  display: flex;
  .user-sidebar {
    li {
      padding-right: 10px;
      &:hover {
        cursor: pointer;
      }
    }
    .tab-nav {
      color: rgb(62, 31, 236);
      &__active {
        background: rgb(224, 115, 166);
      }
    }
  }
}
.selected-user-container {
  border: 1px solid #000;
  height: 233px;
  width: 333px;
}
</style>
