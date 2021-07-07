import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
    path: "/str-api",
    name: "Strapi",
    component: () => import("../views/strapi/index.vue"),
  },
  {
    path: "/call",
    name: "Call",
    component: () => import("../views/call/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
