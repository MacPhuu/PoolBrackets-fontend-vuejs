import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/news", component: () => import("pages/NewsPage.vue") },
      { path: "/players", component: () => import("pages/PlayersPage.vue") },
      { path: "/rankings", component: () => import("pages/RankingsPage.vue") },
      {
        path: "/live-scores",
        component: () => import("pages/Players/PlayerDetailPage.vue"),
      },
      {
        path: "/events",
        component: () => import("pages/EventsPage.vue"),
      },
      {
        path: "/events/:eventName/",
        component: () => import("layouts/EventLayout.vue"),
        children: [
          {
            path: "",
            name: "EventDetailPage",
            component: () => import("pages/Events/EventDetailPage.vue"),
          },
          {
            path: "/events/:eventName/event-rankings",
            component: () => import("pages/Events/EventRankingsPage.vue"),
          },
          {
            path: "/events/:eventName/event-live-score",
            component: () => import("pages/Events/EventLiveScoresPage.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
