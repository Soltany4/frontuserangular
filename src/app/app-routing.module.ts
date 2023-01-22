import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';

const routes: Routes = [{
  path: '',
  loadChildren: () =>
    import('./login/login.module').then(
      m => m.LoginModule
    )
},
{
  path: '',
  loadChildren: () =>
    import('./signup/signup.module').then(
      m => m.SignupModule
    )
},
{path: 'dashboard',component: DashboardComponent,

children: [
  {
    path: 'home',
    loadChildren: () =>
      import('./dashboard/home/home.module').then(
        m=>m.HomeModule
      )
   },
   {
     path: 'emplois',
     loadChildren: () => 
       import('./dashboard/emplois/emplois.module').then(
         m=>m.EmploisModule
       )
   },
] 

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardModule], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
