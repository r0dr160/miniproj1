import { createRouter, createWebHistory } from 'vue-router';
import QuemSouEu from '../components/QuemSouEu.vue';
import OQueFaco from '../components/OQueFaco.vue';
import Hobbies from '../components/MyHobbies.vue';

const routes = [
    { path: '/', component: QuemSouEu },
    { path: '/oque-faco', component: OQueFaco },
    { path: '/hobbies', component: Hobbies },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;