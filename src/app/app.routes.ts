import { Routes } from '@angular/router';
import { HomeComponent } from './layout/pages/home/home.component';
 

import { LoginComponent } from './layout/pages/login/login.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { NoyFoundComponent } from './layout/additions/noy-found/noy-found.component';
import { routingGuardGuard } from './shared/guardes/routing-guard.guard';
import { ForgetpasswordComponent } from './layout/additions/forgetpassword/forgetpassword.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent, canActivate: [routingGuardGuard] },
  {
    path: 'checkout/:id',
    loadComponent: () =>
      import('./layout/additions/checkout/checkout/checkout.component').then(
        (x) => x.CheckoutComponent
      ),
    canActivate: [routingGuardGuard],
  },

  {
    path: 'allorders',
    loadComponent: () =>
      import('./layout/additions/checkout/all-order/all-order.component').then(
        (x) => x.AllOrderComponent
      ),
    canActivate: [routingGuardGuard],
  },
  {
    path: 'Wishlist',
    loadComponent: () =>
      import('./layout/additions/wishlist/wishlist.component').then(
        (x) => x.WishlistComponent
      ),
    canActivate: [routingGuardGuard],
  },
  {
    path: 'Forgetpassword',
    component: ForgetpasswordComponent,
  },
  {
    path: 'brand',
    loadComponent: () =>
      import('./layout/pages/brands/brands.component').then(
        (x) => x.BrandsComponent
      ),
    canActivate: [routingGuardGuard],
  },
  {
    path: 'productDetails/:id',
    loadComponent: () =>
      import(
        './layout/additions/product-details/product-details.component'
      ).then((x) => x.ProductDetailsComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./layout/pages/cart/cart.component').then((x) => x.CartComponent),
    canActivate: [routingGuardGuard],
  },
  {
    path: 'product',
    loadComponent: () =>
      import('./layout/pages/products/products.component').then(
        (x) => x.ProductsComponent
      ),
    canActivate: [routingGuardGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'categories',
    loadComponent: () =>
      import('./layout/pages/categories/categories.component').then(
        (x) => x.CategoriesComponent
      ),
    canActivate: [routingGuardGuard],
  },
  { path: '**', component: NoyFoundComponent },
];
