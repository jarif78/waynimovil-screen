import Home from './pages/Home.vue';

import PropuestaComercial from './pages/PropuestaComercial.vue';

import SolicitudCompletada from './pages/SolicitudCompletada.vue';
import SolicitudCancelada from './pages/SolicitudCancelada.vue';

const routes = [{
        path: '/',
        component: Home
    },
    {
        path: '/propuesta-comercial',
        component: PropuestaComercial
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