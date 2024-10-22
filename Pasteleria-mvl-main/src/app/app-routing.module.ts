import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/cliente/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/paginas-compartidas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/paginas-compartidas/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/cliente/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'inicio-v',
    loadChildren: () => import('./pages/vendedor/inicio-v/inicio-v.module').then( m => m.InicioVPageModule)
  },
  {
    path: 'producto-v',
    loadChildren: () => import('./pages/vendedor/producto-v/producto-v.module').then( m => m.ProductoVPageModule)
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./pages/vendedor/agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },
  {
    path: 'inicio-sesion',
    loadChildren: () => import('./pages/paginas-compartidas/inicio-sesion/inicio-sesion.module').then( m => m.InicioSesionPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/paginas-compartidas/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'producto',
    loadChildren: () => import('./pages/cliente/producto/producto.module').then( m => m.ProductoPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/paginas-compartidas/notfound/notfound.module').then( m => m.NotfoundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
