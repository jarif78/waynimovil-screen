import Home from './pages/Home.vue';

import SolicitudCompletada from './pages/SolicitudCompletada.vue';
import SolicitudCancelada from './pages/SolicitudCancelada.vue';

import PropuestaComercial from './pages/PropuestaComercial.vue';
import Ingreso from './pages/Ingreso.vue';
import Contrasenia from './pages/Contrasenia.vue';
import SolicitudPaso1 from './pages/SolicitudPaso1.vue';
import SolicitudPaso3 from './pages/SolicitudPaso3.vue';
import SolicitudPaso4 from './pages/SolicitudPaso4.vue';
import SolicitudPaso5 from './pages/SolicitudPaso5.vue';

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
    {
        path: '/contrasenia',
        component: Contrasenia
    },
    {
        path: '/solicitud-paso-1',
        component: SolicitudPaso1
    },
    {
        path: '/solicitud-paso-3',
        component: SolicitudPaso3
    },
    {
        path: '/solicitud-paso-4',
        component: SolicitudPaso4
    },
    {
        path: '/solicitud-paso-5',
        component: SolicitudPaso5
    },
];

export default routes;