<template>
  <div class="home">
    <h2>Reduce 例子</h2>
    <section>
      <h4 class="text-align">1. 数组里所有值的和</h4>
      <div class="example-container">
        <p>[3,2,9,1,2,3,4]</p>
        <p>{{ q1 }}</p>
      </div>
    </section>

    <section>
      <h4 class="text-align">2. 累加对象数组里的值</h4>
      <div class="example-container">
        <p>[{x: 1}, {x:2}, {x:3}]</p>
        <p>{{ q2 }}</p>
      </div>
    </section>

    <section>
      <h4 class="text-align">3. 将二维数组转化为一维</h4>
      <div class="example-container">
        <p>[[0, 1], [2, 3], [4, 5]]</p>
        <p>{{ q3 }}</p>
      </div>
    </section>

    <section>
      <h4 class="text-align">4. 计算数组中每个元素出现的次数</h4>
      <div class="example-container">
        <p>['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']</p>
        <p>{{ q4 }}</p>
      </div>
    </section>

    <section>
      <h4 class="text-align">5. 按属性对object分类</h4>
      <div class="example-container">
        <p>
          { name: 'Alice', age: 21 }, { name: 'Max', age: 20 }, { name: 'Jane',
          age: 20 }
        </p>
        <p>{{ q5 }}</p>
      </div>
    </section>

    <section>
      <h4 class="text-align">
        6. 使用扩展运算符和initialValue绑定包含在对象数组中的数组
      </h4>
      <div class="example-container">
        <p>
          { name: "Anna", books: ["Bible", "Harry Potter"], age: 21, }, { name:
          "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26, }, {
          name: "Alice", books: ["The Lord of the Rings", "The Shining"], age:
          18, },
        </p>
        <p>{{ q6 }}</p>
      </div>
    </section>

    <section>
      <h4 class="text-align">7. 数组去重</h4>
      <div class="example-container">
        <p>['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']</p>
        <p>{{ q7 }}</p>
      </div>
    </section>

    <section>
      <h4 class="text-align">8. 按顺序运行Promise</h4>
      <div class="example-container">
        <p></p>
        <p>{{ q8 }}</p>
      </div>
    </section>

    <section>
      <h4 class="text-align">9.功能型函数管道</h4>
      <div class="example-container">
        <p></p>
        <p>{{ q9 }}</p>
      </div>
    </section>

    <section>
      <h4 class="text-align">10. 使用 reduce实现map</h4>
      <div class="example-container">
        <p></p>
        <p>{{ q10 }}</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Home extends Vue {
  get q1(): number {
    let a = [3, 2, 9, 1, 2, 3, 4];
    let b = (ac: number, cu: number) => ac + cu;
    let c = a.reduce(b);
    return c;
  }

  get q2(): number {
    let a = [{ x: 1 }, { x: 2 }, { x: 3 }];
    let b = (ac: number, cu: number) => ac + cu;
    let c = a.map((item) => item.x).reduce(b);
    return c;
  }

  get q3(): number[] {
    let a = [
      [0, 1],
      [2, 3],
      [4, 5],
    ];
    let b: any = (ac: [], cu: []) => ac.concat(cu);
    let c = a.reduce(b);
    return c;
  }

  get q4(): Record<string, number> {
    let a = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
    let b = (ac: Record<string, number>, cu: string) => {
      if (cu in ac) {
        ac[cu]++;
      } else {
        ac[cu] = 1;
      }
      return ac;
    };
    let c = a.reduce(b, {});
    return c;
  }

  get q5(): any {
    let people: {
      name: string;
      age: number;
      sex?: number;
    }[] = [
      { name: "Alice", age: 21, sex: 0 },
      { name: "Max", age: 20, sex: 1 },
      { name: "Jane", age: 20, sex: 0 },
    ];
    function groupBy(objAry: any[], property: string): any {
      return objAry.reduce((ac, cu) => {
        let key = cu[property];
        if (!ac[key]) {
          ac[key] = [];
        }
        ac[key].push(cu);
        return ac;
      }, {});
    }
    let result = groupBy(people, "age");
    return result;
  }

  get q6(): string[] {
    let friends = [
      {
        name: "Anna",
        books: ["Bible", "Harry Potter"],
        age: 21,
      },
      {
        name: "Bob",
        books: ["War and peace", "Romeo and Juliet"],
        age: 26,
      },
      {
        name: "Alice",
        books: ["The Lord of the Rings", "The Shining"],
        age: 18,
      },
    ];
    let a = (ac: string[], cu: any) => [...ac, ...cu.books];
    let b: string[] = friends.reduce(a, []);
    return b;
  }

  get q7(): number {
    return 1;
  }

  get q8(): number {
    return 2;
  }
  get q9(): number {
    return 3;
  }
  created(): void {
    console.log(998);
  }
}
</script>
