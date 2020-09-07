import Home from './pages/Home.vue';

import Step01 from './pages/Step01.vue';
import Step02 from './pages/Step02.vue';
import Step03 from './pages/Step03.vue';
import Step04 from './pages/Step04.vue';
import Step05 from './pages/Step05.vue';
import Step06 from './pages/Step06.vue';
import Step07 from './pages/Step07.vue';
import Step08 from './pages/Step08.vue';
import FinPrestamo01 from './pages/FinPrestamo01.vue';
import FinPrestamo02 from './pages/FinPrestamo02.vue';
import FinPrestamo03 from './pages/FinPrestamo03.vue';
import FinPrestamo04 from './pages/FinPrestamo04.vue';

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
        path: '/fin-prestamo-01',
        component: FinPrestamo01
    },
    {
        path: '/fin-prestamo-02',
        component: FinPrestamo02
    },
    {
        path: '/fin-prestamo-03',
        component: FinPrestamo03
    },
    {
        path: '/fin-prestamo-04',
        component: FinPrestamo04
    },
];

export default routes;