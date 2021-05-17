import Vue from "vue";
import VueRouter from "vue-router";
import ProjectList from "../views/ProjectList.vue";
import ProjectDetails from "../views/ProjectDetails.vue";
import ProjectCreate from "../views/ProjectCreate.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: { name: "project-list" },
  },
  {
    path: "/projects",
    name: "project-list",
    component: ProjectList,
  },
  {
    path: "/projects/:project_id",
    name: "project-details",
    component: ProjectDetails,
  },
  {
    path: "/projects/create",
    name: "project-create",
    component: ProjectCreate,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
