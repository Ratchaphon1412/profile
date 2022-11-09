import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
/* eslint-disable */
  {
    path:"/",
    name:"Main",
    component: () => import('../views/LandingPage.vue'),
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
