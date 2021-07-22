import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");

function loadPageByRoutes(str: string) {
  return function (resolve: any) {
    require([`../views/${str}.vue`], resolve);
  };
}
// const result = [
//   {
//     path: "/example",
//     name: "Example",
//     component: Home,
//   },
//   {
//     path: "/test",
//     name: "Test",
//     component: About,
//   },
// ];

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/example",
    name: "Example",
    component: () => import("../views/my-example.vue"),
  },
  {
    path: "/keep-alive",
    name: "KeepAlive",
    meta: {
      keepAlive: true,
    },
    component: () => import("../views/keep-alive.vue"),
  },
  {
    path: "/sorting-algorithm",
    name: "SortingAlgorithm",
    component: () => import("../views/sorting-algorithm.vue"),
  },
  {
    path: "/header-search",
    name: "HeaderSearch",
    component: () => import("../views/headerSearch/index.vue"),
  },
  {
    path: "/str-api",
    name: "Strapi",
    component: () => import("../views/strapi/index.vue"),
  },
  {
    path: "/call",
    name: "Call",
    component: () => import("../views/call/index.vue"),
  },
  {
    path: "/event-emitter",
    name: "EventEmitter",
    component: () => import("../views/event-emitter/index.vue"),
  },
];

// import { importComponent } from "./util";
// const routes = importComponent();
// const routes = result;
console.log(routes, "routes");

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
