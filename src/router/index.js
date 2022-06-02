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
        name: "Home",
        component: InternationalFacultyVue,
    },
    {
        path: "/NationalFaculty",
        name: "Home",
        component: NationalFacultyVue,
    },
    // {
    //     path: "/about",
    //     name: "About",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ "../views/About.vue"),
    // },
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;