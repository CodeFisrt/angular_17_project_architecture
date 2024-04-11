import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-new-product',
  templateUrl: './create-new-product.component.html',
  styleUrl: './create-new-product.component.css',
})
export class CreateNewProductComponent implements OnInit {
  isLoaderPresent: boolean = true;
  productList: any[] = [];
  productObj: any = {
    ProductId: 0,
    ProductSku: '',
    ProductName: '',
    ProductPrice: 0,
    ProductShortName: '',
    ProductDescription: '',
    CreatedDate: '2024-04-10T10:58:21.405Z',
    DeliveryTimeSpan: '',
    CategoryId: 0,
    ProductImageUrl: '',
  };
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  // createProduct() {
  //   this.http
  //     .post(
  //       'https://freeapi.gerasim.in/api/BigBasket/CreateProduct',
  //       this.productObj
  //     )
  //     .subscribe(
  //       (res: any) => {
  //         this.productList = res.data;
  //         if (res.result) {
  //           alert('Category Created Successfully');
  //         } else {
  //           alert(res.message);
  //         }
  //         this.isLoaderPresent = false;
  //       },
  //       (error) => {
  //         console.error('Error occurred while creating product:', error);
  //         this.isLoaderPresent = false;
  //       }
  //     );
  // }

  createProduct() {
    this.http
      .post(
        'https://freeapi.gerasim.in/api/BigBasket/CreateProduct',
        this.productObj
      )
      .subscribe(
        (res: any) => {
          if (res && res.result) {
            alert('Product Created Successfully');
            this.productObj = {
              ProductId: 0,
              ProductSku: '',
              ProductName: '',
              ProductPrice: 0,
              ProductShortName: '',
              ProductDescription: '',
              CreatedDate: '2024-04-10T10:58:21.405Z',
              DeliveryTimeSpan: '',
              CategoryId: 0,
              ProductImageUrl: '',
            };
          } else {
            alert('Failed to create product. ' + res.message);
          }
          this.isLoaderPresent = false;
        },
        (error) => {
          console.error('Error occurred while creating product:', error);
          alert('Failed to create product. Please try again later.');
          this.isLoaderPresent = false;
        }
      );
  }
}
