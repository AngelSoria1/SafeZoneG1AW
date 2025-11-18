import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Users } from './components/users/users';
import { Usuarioregistrar } from './components/users/usuarioregistrar/usuarioregistrar';
import { Alertaregistrar } from './components/alerta/alertaregistrar/alertaregistrar';
import { Alerta } from './components/alerta/alerta';
export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full',
    },
    {
        path: 'usuarios',
        component: Users,
        children: [
            { path: 'news', component: Usuarioregistrar },
            { path: 'edits/:id', component: Usuarioregistrar },
        ],
    },
    {
        path: 'alertas',
        component: Alerta,
        children: [
            { path: 'news', component: Alertaregistrar },
            { path: 'edits/:id', component: Alertaregistrar },
        ],
    },
];
