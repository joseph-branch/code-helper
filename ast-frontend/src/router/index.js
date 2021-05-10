import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import CodeHelper from "@/views/CodeHelper.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/404NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/codehelper",
    name: "CodeHelper",
    component: CodeHelper,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "*",
    name: "404NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
