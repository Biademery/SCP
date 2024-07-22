import { createRouter, createWebHistory } from "vue-router";
import SobreMim from "../components/SobreMim.vue";
import Home from "../components/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/sobremim", name: "SobreMim", component: SobreMim },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
