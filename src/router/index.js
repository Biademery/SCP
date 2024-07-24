import { createRouter, createWebHistory } from "vue-router";
import SobreMim from "../components/SobreMim.vue";
import Home from "../components/Home.vue";
import Eventos from "../components/Eventos.vue";
import PlanosGoverno from "../components/PlanosGoverno.vue";
import VamosConversar from "../components/VamosConversar.vue";
import GruposZap from "../components/GruposZap.vue";
import ApoieCampanha from "../components/ApoieCampanha.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/sobremim", name: "Sobre Mim", component: SobreMim },
  {
    path: "/planosdegoverno",
    name: "Planos de Governo",
    component: PlanosGoverno,
  },
  { path: "/eventos", name: "Eventos", component: Eventos },
  {
    path: "/vamosconversar",
    name: "Vamos Conversar",
    component: VamosConversar,
  },
  { path: "/gruposzap", name: "Grupos de Zap", component: GruposZap },
  {
    path: "/apoiecampanha",
    name: "Apoie Campanha",
    component: ApoieCampanha,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
