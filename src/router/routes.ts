import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/news",
        component: () => import("pages/NewsPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/players",
        component: () => import("pages/PlayersPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/rankings",
        component: () => import("pages/RankingsPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/live-scores",
        component: () => import("pages/LiveScoresPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/events",
        component: () => import("pages/EventsPage.vue"),
        meta: { requiresAuth: true },
      },
      {
        path: "/events/:eventName/",
        component: () => import("layouts/EventLayout.vue"),
        meta: { requiresAuth: true },
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
          {
            path: "/events/:eventName/event-branches",
            component: () => import("pages/Events/EventBranchesPage.vue"),
          },
        ],
      },
      {
        path: "players/:playerName/",
        component: () => import("pages/Players/PlayerDetailPage.vue"),
        meta: { requiresAuth: true },
      },
    ],
  },
  {
    path: "/host",
    component: () => import("layouts/HostLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "profiles",
        component: () => import("pages/Host/HostMainPage.vue"),
      },
      {
        path: "your_events",
        component: () => import("pages/Host/HostEventsPage.vue"),
      },
      {
        path: "create_event",
        component: () => import("pages/Host/HostCreateEventPage.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("pages/Authentication/LoginPage.vue"),
  },
  {
    path: "/sign-up",
    component: () => import("pages/Authentication/SignUpPage.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
