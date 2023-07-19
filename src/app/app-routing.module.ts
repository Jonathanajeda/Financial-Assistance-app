import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProtectedPageComponent } from './protected-page/protected-page.component'; // Import the ProtectedPageComponent


const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  { 
    path: 'landing', 
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  { 
    path: 'protected-page', 
    component: ProtectedPageComponent, 
    canActivate: [AuthGuard] 
  },
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'admin-interface',
    loadChildren: () => import('./admin-interface/admin-interface.module').then( m => m.AdminInterfacePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'cashier',
    loadChildren: () => import('./cashier/cashier.module').then( m => m.CashierPageModule)
  },
  {
    path: 'requirement-list',
    loadChildren: () => import('./requirement-list/requirement-list.module').then( m => m.RequirementListPageModule)
  },
  {
    path: 'application',
    loadChildren: () => import('./application/application.module.').then( m => m.ApplicationPageModule)
  },
  {
    path: 'consumer-account-details',
    loadChildren: () => import('./consumer-account-details/consumer-account-details.module').then( m => m.ConsumerAccountDetailsPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'table',
    loadChildren: () => import('./table/table.module').then( m => m.TablePageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
