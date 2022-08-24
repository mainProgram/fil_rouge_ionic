import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'catalogue',
    loadChildren: () => import('./catalogue/catalogue.module').then( m => m.CataloguePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./security/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./security/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./security/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
