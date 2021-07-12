export const loadView = (view: any) => {
  // 路由懒加载
  // return () => import(`@/views/${view}`)//不知道为什么不行
  return (resolve: any) => require([`${view}`], resolve); //可以解决
};

export const importComponent = (): Array<any> => {
  const result = [
    {
      path: "/example",
      name: "Example",
      component: loadView("../views/my-example.vue"),
    },
    {
      path: "/test",
      name: "Test",
      component: loadView("About.vue"),
    },
  ];
  return result;
};
