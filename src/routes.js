import Home from './pages/Home.vue';

import SolicitudCompletada from './pages/SolicitudCompletada.vue';
import SolicitudCancelada from './pages/SolicitudCancelada.vue';

import PropuestaComercial from './pages/PropuestaComercial.vue';
import Ingreso from './pages/Ingreso.vue';

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/solicitud-completada',
        component: SolicitudCompletada
    },
    {
        path: '/solicitud-cancelada',
        component: SolicitudCancelada
    },
    {
        path: '/propuesta-comercial',
        component: PropuestaComercial
    },
    {
        path: '/ingreso',
        component: Ingreso
    },
];

export default routes;