import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import ListView from "../views/ListView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: ListView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
