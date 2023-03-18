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

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},
{
    path: "/Outline",
    name: "Outline of Scientific Programme",
    component: Programmes,
},
{
    path: "/Gallery",
    name: "Gallery",
    component: Gallery,
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