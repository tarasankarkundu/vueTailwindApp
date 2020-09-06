import { createWebHistory, createRouter } from "vue-router";
import AuthComponent from "./components/auth/AuthComponent.vue";
import SignIn from "./components/auth/SignIn.vue";
import SignUp from "./components/auth/SignUp.vue";
import ResetPassword from "./components/auth/ResetPassword.vue";


const history = createWebHistory();

const routes = [
    { path: "/", redirect: '/auth' },
    { path: "/auth", component: AuthComponent, children:[
        {path: "", component: SignIn},
        {path: "signUp", component: SignUp},
        {path: "resetPassword", component: ResetPassword},
    ] },
];

const router = createRouter({ history, routes });

export default router;