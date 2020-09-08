import Home from './pages/Home.vue';

import Step01 from './pages/Step01.vue';
import Step02 from './pages/Step02.vue';
import Step03 from './pages/Step03.vue';
import Step04 from './pages/Step04.vue';
import Step05 from './pages/Step05.vue';
import Step06 from './pages/Step06.vue';
import Step07 from './pages/Step07.vue';
import Step08 from './pages/Step08.vue';

import SolicitudCompletada from './pages/SolicitudCompletada.vue';
import SolicitudCancelada from './pages/SolicitudCancelada.vue';

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/step01',
        component: Step01
    },
    {
        path: '/step02',
        component: Step02
    },
    {
        path: '/step03',
        component: Step03
    },
    {
        path: '/step04',
        component: Step04
    },
    {
        path: '/step05',
        component: Step05
    },
    {
        path: '/step06',
        component: Step06
    },
    {
        path: '/step07',
        component: Step07
    },
    {
        path: '/step08',
        component: Step08
    },
    {
        path: '/solicitud-completada',
        component: SolicitudCompletada
    },
    {
        path: '/solicitud-cancelada',
        component: SolicitudCancelada
    },
];

export default routes;