// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        component : DashboardComponent,
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('../app/pages/dashboard/dashboard/dashboard.component').then((m)=>m.DashboardComponent)
      },
      {
        path: 'students',
        loadChildren: () => import('./pages/students/students.module').then((m) => m.StudentModule)
      },
      {
        path: 'employee',
        loadChildren: () => import('./pages/employees/employee.module').then((m) => m.EmployeeModule)
      }
      ,
      {
        path: 'subjects',
        loadChildren: () => import('./pages/subjects/subjects.module').then((m) => m.SubjectModule)
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./demo/authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./demo/authentication/sign-in/sign-in.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
