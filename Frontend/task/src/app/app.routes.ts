import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { authGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { RootLayoutComponent } from './layout/root-layout/root-layout.component';

export const routes: Routes = [
  {
    path: 'root',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'tasks',
        canActivate: [authGuard],
        component: TaskViewComponent,
      },
    ],
    component: RootLayoutComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
