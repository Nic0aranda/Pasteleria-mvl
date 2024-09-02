import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/comprador/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/comprador/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/comprador/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/comprador/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'validacion-compra',
    loadChildren: () => import('./pages/comprador/validacion-compra/validacion-compra.module').then( m => m.ValidacionCompraPageModule)
  },
  {
    path: 'inicio-v',
    loadChildren: () => import('./pages/vendedor/inicio-v/inicio-v.module').then( m => m.InicioVPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
