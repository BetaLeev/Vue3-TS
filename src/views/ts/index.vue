<template>
  <div>
    <h2 class="title">typescript</h2>
    <main>
      <div class="content">
        <div class="content-container">
          <h3 class="title">类型断言</h3>
          <article>
            类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
            类型断言有两种形式。 其一是“尖括号”语法：,另一个为as语法：
          </article>
        </div>

        <div class="content-container">
          <h3 class="title">泛型(generic)</h3>
          <article>
            我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。
            组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型
            类型推论帮助我们保持代码精简和高可读性
            使用泛型创建像identity这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。
            除了泛型接口，我们还可以创建泛型类。
            注意，无法创建泛型枚举和泛型命名空间。
            类有两部分：静态部分和实例部分。
            泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。

            <h3 class="title">范型约束</h3>
            <article>extends 关键字实现约束</article>
          </article>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
interface GenericIdentityFn<T> {
  (arg: T): T;
}
interface Lengthwise {
  length: number;
}
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class extends Vue {
  identity<T>(arg: T): T {
    return arg;
  }

  loggingIdentify<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
  }

  testGeneric(): void {
    const a = this.identity<number>(4);
    const b = this.identity<string>("leev");
    const c = this.identity<Record<string, unknown>>({ leev: "name" });
    console.log(a);
    console.log(b);
    console.log(c);
  }

  identity2<T>(arg: T): T {
    return arg;
  }

  myIdentity: GenericIdentityFn<number> = this.identity2;

  loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }

  // 在泛型约束中使用类型参数
  getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  private x = { a: 1, b: 2, c: 3, d: 4 };

  extendsTest(): void {
    this.getProperty(this.x, "a");
  }

  created() {
    this.testGeneric();
  }
}
</script>
<style lang="less" scoped></style>
