import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateNewProductComponent } from './pages/create-new-product/create-new-product.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { CategoryComponent } from './pages/category/category.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children: [
      {
        path: 'productList',
        component: ProductListComponent
      },
      {
        path: 'createProduct/:id',
        component: CreateNewProductComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'orderList',
        component: OrderListComponent
      },
      {
        path: 'openOrder/:id',
        component: OrderListComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
