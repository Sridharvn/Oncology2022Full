import Vue from "vue";
import VueRouter from "vue-router";
import CommittePageVue from "../views/CommittePage.vue";
import Home from "../views/Home.vue";
import InternationalFacultyVue from "../views/InternationalFaculty.vue";
import NationalFacultyVue from "../views/NationalFaculty.vue";
// import OutlineVue from "../views/Outline.vue";
import Programmes from '@/views/Programmes'
import Gallery from '@/views/Gallery'

Vue.use(VueRouter);

const routes = [

    {
        path: "/oncology2022/",
        name: "Home",
        component: Home,
    },
    {
        path: "/oncology2022/Outline",
        name: "Outline of Scientific Programme",
        component: Programmes,
    },
    {
        path: "/oncology2022/Gallery",
        name: "Gallery",
        component: Gallery,
    },
    {
        path: "/oncology2022/Committee",
        name: "Organizing Committee",
        component: CommittePageVue,
    },
    {
        path: "/oncology2022/InternationalFaculty",
        name: "International Faculty",
        component: InternationalFacultyVue,
    },
    {
        path: "/oncology2022/NationalFaculty",
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