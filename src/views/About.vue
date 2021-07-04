<template>
  <div>
    <div class="about">
      <h1>This is an about page</h1>
      <input type="text" v-model="ip" @blur="handleTestIp" />
      <!-- <div>{{ ip }}</div> -->
      <div>{{ testIp }}</div>
      <div>
        <div>
          <p>当前ip {{ currentIp }} , 当前段 {{ maskBits }}</p>
          <p></p>
        </div>
        <p>开始 ip {{ beginIp }}</p>
        <p>结束 ip {{ endIp }}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class OtherContent extends Vue {
  private ip = "";
  private currentIp = "";
  private maskBits = "";
  private beginIp = "";
  private endIp = "";
  get testIp(): boolean {
    let str = this.ip;
    let reg = new RegExp(
      /^(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([1-9]|[1-2]\d|3[0-2])$/
    );
    return reg.test(str);
  }

  private async handleTestIp() {
    if (this.testIp) {
      let ip = this.ip.split("/");
      let currentIp = ip[0];
      let maskBits = ip[1];
      this.currentIp = currentIp;
      this.maskBits = maskBits;

      if (currentIp && maskBits) {
        const { data, code } = await this.getIpRange(
          currentIp,
          Number(maskBits)
        );
        if (code === 200) {
          this.beginIp = data.beginIp;
          this.endIp = data.endIp;
        }
      }
    } else {
      this.beginIp = "";
      this.endIp = "";
      this.currentIp = "";
      this.maskBits = "";
    }
  }

  private getIpRange(ip: string, mask: number): Promise<any> {
    const result = {
      code: 200,
      data: { beginIp: "192.166.1.2", endIp: "192.166.255.255" },
    };
    return new Promise((resolve) => {
      resolve(result);
    });
  }
}
</script>
<style lang="less" scoped></style>
