import Vue from "vue";
import VueRouter from "vue-router";
import UserProfile from "../components/UserProfile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "UserProfile",
    component: UserProfile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
