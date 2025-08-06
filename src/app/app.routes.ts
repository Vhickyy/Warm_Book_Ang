import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/auth/login/login';
import { Register } from './pages/auth/register/register';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'register',
        component: Register,
      },
    ],
  },
  {
    path: 'book',
    component: Home,
  },
  {
    path: 'about',
    component: Home,
  },
  {
    path: 'journal',
    component: Home,
  },
];
