import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { CreateNewProductComponent } from './pages/create-new-product/create-new-product.component';
import { CategoryComponent } from './pages/category/category.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NaPipe } from './shared/pipes/na.pipe';
import { ProductCardComponent } from './shared/reusabelComponent/product-card/product-card.component';
import { IsEditDirective } from './shared/directives/is-edit.directive';
import { MyTableComponent } from './shared/reusabelComponent/my-table/my-table.component';
import { NumbersOnlyDirective } from './shared/directives/numbers-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateNewProductComponent,
    CategoryComponent,
    CustomerComponent,
    CartComponent,
    OrderListComponent,
    OrderDetailsComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    NaPipe,
    ProductCardComponent,
    IsEditDirective,
    MyTableComponent,
    NumbersOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
