import { defineRouter } from "#q-app/wrappers";
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const token = localStorage.getItem("Token");
    const role = parseInt(localStorage.getItem("role") || "-1");

    if (to.meta.requiresAuth && !token) {
      return next({ path: "/login" });
    }

    const allowedRoles = to.meta.allowedRoles as number[] | undefined;

    if (allowedRoles && !allowedRoles.includes(role)) {
      return next({ path: "/unauthorized" }); // Hoặc '/' hoặc '/login'
    }

    next();
  });

  return Router;
});
