import Vue from "vue";
import VueRouter from "vue-router";
import CommittePageVue from "../views/CommittePage.vue";
import Home from "../views/Home.vue";
import InternationalFacultyVue from "../views/InternationalFaculty.vue";
import NationalFacultyVue from "../views/NationalFaculty.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Committee",
        name: "Organizing Committee",
        component: CommittePageVue,
    },
    {
        path: "/InternationalFaculty",
        name: "International Faculty",
        component: InternationalFacultyVue,
    },
    {
        path: "/NationalFaculty",
        name: "National Faculty",
        component: NationalFacultyVue,
    },
    {
        path: "*",
        name: "Home",
        redirect: "/",
    },
    {
        path: "/:catchAll(.*)",
        component: Home,
        name: "Home",
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;