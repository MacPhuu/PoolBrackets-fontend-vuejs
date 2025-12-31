import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },

      { path: "news", component: () => import("pages/NewsPage.vue") },
      { path: "players", component: () => import("pages/PlayersPage.vue") },
      { path: "rankings", component: () => import("pages/RankingsPage.vue") },
      { path: "live-scores", component: () => import("pages/LiveScoresPage.vue") },
      { path: "events", component: () => import("pages/EventsPage.vue") },

      {
        path: "events/:eventName",
        component: () => import("layouts/EventLayout.vue"),
        children: [
          {
            path: "",
            name: "EventDetailPage",
            component: () =>
              import("pages/Events/EventDetailPage.vue"),
          },
          {
            path: "event-rankings",
            component: () =>
              import("pages/Events/EventRankingsPage.vue"),
          },
          {
            path: "event-live-score",
            component: () =>
              import("pages/Events/EventLiveScoresPage.vue"),
          },
          {
            path: "event-branches",
            component: () =>
              import("pages/Events/EventBranchesPage.vue"),
          },
        ],
      },

      {
        path: "players/:playerName",
        component: () =>
          import("pages/Players/PlayerDetailPage.vue"),
      },
    ],
  },

  {
    path: "/host",
    component: () => import("layouts/HostLayout.vue"),
    children: [
      { path: "profiles", component: () => import("pages/Host/HostMainPage.vue") },
      { path: "your_events", component: () => import("pages/Host/HostEventsPage.vue") },
      { path: "create_event", component: () => import("pages/Host/HostCreateEventPage.vue") },
    ],
  },

  {
    path: "/admin",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      { path: "app_status", component: () => import("pages/Admin/AdminMainPage.vue") },
      { path: "view_hosts", component: () => import("pages/Admin/AdminViewHostsPage.vue") },
      { path: "view_players", component: () => import("pages/Admin/AdminViewPlayersPage.vue") },
    ],
  },

  { path: "/login", component: () => import("pages/Authentication/LoginPage.vue") },
  { path: "/sign-up", component: () => import("pages/Authentication/SignUpPage.vue") },

  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
