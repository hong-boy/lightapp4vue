import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js";
import hooks from "./hooks";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach(hooks);

export default router;
