// Views - Pages
const Homepage = () => import("../views/pages/HomePage");
const AuthContainer = () => import("../containers/AuthContainer");
const Login = () => import("../views/pages/Login");
const Register = () => import("../views/pages/Register");
const RestorePassword = () => import("../views/pages/RestorePassword");
const SetNewPassword = () => import("../views/pages/SetNewPassword");
const TheContainer = () => import("../containers/TheContainer");
const NotExistPage = () => import("../views/pages/404");
const TwoFaGoogle = () => import("../views/pages/TwoFaGoogle");

export default [
    {
        path: '/',
        redirect: '/ ',
        name: 'Home',
        component: TheContainer,
        children: [
            {
                path: '/ ',
                name: 'Home-page',
                component: Homepage,
            }
        ]
    },
    {
        path: '/login',
        redirect: 'login',
        name: 'Auth container',
        meta: {
            requiresAuth: false
        },
        component: AuthContainer,
        children: [
            {
                path: '/login',
                name: 'Login',
                component: Login,
                // beforeEnter(to, from, next) {
                //     store.dispatch('user/setRoute', to.name);
                //     next()
                // }
            },
            {
                path: '/2fa-google',
                name: 'TwoFaGoogle-page',
                component: TwoFaGoogle
            },
            {
                path: '/register',
                name: 'Register',
                component: Register,
                // beforeEnter(to, from, next) {
                //     store.dispatch('user/setRoute', to.name);
                //     next()
                // }
            },
            {
                path: '/restore-password',
                name: 'Restore password',
                component: RestorePassword,
                // beforeEnter(to, from, next) {
                //     store.dispatch('user/setRoute', to.name);
                //     next()
                // }
            },
            {
                path: '/set-new-password',
                name: 'Set new password',
                alias: '/new',
                component: SetNewPassword,
                // beforeEnter(to, from, next) {
                //     if (to.query.type && to.query.token) {
                //         let type = to.query.type;
                //         let token = to.query.token;
                //
                //         localStorage.tim = token;
                //     }
                //     store.dispatch('user/setRoute', to.name);
                //     next()
                // }
            },
        ]
    },
    {
        path: '/404',
        name: '404',
        meta: {
            requiresAuth: false
        },
        component: NotExistPage,

    },
    {
        path: '*',
        redirect: '/404'
    }

];
