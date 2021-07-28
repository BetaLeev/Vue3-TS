<template>
  <div>
    <h2>flex 红绿蓝</h2>
    <div class="flex-container">
      <div class="box">
        <div class="box-container">
          <div class="red"></div>
          <div class="green"></div>
          <div class="blue"></div>
        </div>
      </div>

      <div class="box">
        <div class="box-container layout">
          <div class="red header"></div>
          <div class="green main">
            <div class="main-container">
              <h1>头部</h1>
              <h1>尾部</h1>
              <h1>固定</h1>
              <h1>中间</h1>
              <h1>自适应</h1>
              <h1>布局</h1>
            </div>
          </div>
          <div class="blue footer"></div>
        </div>
      </div>

      <div class="box">
        <div class="box-container layout-slide">
          <div class="red slide"></div>
          <div class="content">
            <div class="green header"></div>
            <div class="blue main">
              <div class="main-container">
                <h1>左侧固定</h1>
                <h1>头部固定</h1>
                <h1>中间</h1>
                <h1>内容</h1>
                <h1>自适应</h1>
                <h1></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-container">
      <div>
        <p>align-self属性允许单个项目有与其他项目不一样的对齐方式，</p>
        <p>可覆盖align-items属性。默认值为auto，</p>
        <p>表示继承父元素的align-items属性，</p>
        <p>如果没有父元素，则等同于stretch。</p>
      </div>
      <div class="flex-box">
        <div class="box bg-red"></div>
        <div class="box bg-green"></div>
        <div class="box bg-blue"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class extends Vue {}
</script>
<style lang="less" scoped>
.box {
  height: 333px;
  width: 333px;
  background: rgb(172, 230, 139);
}
.flex-container {
  display: flex;
  justify-content: space-around;
}
.box-container {
  height: 333px;
  width: 333px;
  display: flex;
  position: relative;
  div {
    width: 33.33%;
    height: 33.33%;
  }
  .red {
    background: red;
  }
  .blue {
    margin-top: 66.66%;
    background: blue;
  }

  .green {
    margin-top: 33.33%;
    background: green;
  }
}

.layout {
  display: flex;
  flex-direction: column;
  .header,
  .main,
  .footer {
    margin: 0px;
    width: 100%;
  }
  .header {
    height: 100px;
    background: rgba(red, 0, 0, 0.3);
  }
  .footer {
    height: 33px;
  }
  .main {
    flex: 1;
    overflow-y: scroll;
    .main-container {
      height: 888px;
      //   text-align: center;
      margin: 0 auto;
    }
  }
}

.layout-slide {
  display: flex;
  .slide {
    width: 100px;
    height: 100%;
  }
  .content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      margin: 0px;
      height: 100px;
      width: 100%;
    }
    .main {
      flex: 1;
      width: 100%;
      margin: 0px;
      overflow: scroll;
      .main-container {
        margin: 0px auto;
        color: rosybrown;
      }
    }
  }
}

.flex-box {
  margin: 33px;
  height: 255px;
  width: 255px;
  border: 1px solid forestgreen;
  background-color: rgb(83, 146, 219);
  display: flex;
  .box {
    width: 33.333%;
    height: 33.333%;
  }
  .bg-red {
    background-color: red;
  }
  .bg-green {
    background-color: greenyellow;
    align-self: center;
  }
  .bg-blue {
    background-color: blue;
    align-self: flex-end;
  }
}
</style>
