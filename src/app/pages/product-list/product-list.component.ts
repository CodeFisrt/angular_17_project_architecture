import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/model/class/User';
import { UserService } from '../../core/services/user/user.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  ProductList: any[] = [];
  ProductObj: Product = new Product();

  ProductListObj: any[] = [];

  isLoader: boolean = true;
  isSaveApiCallInProgress: boolean = false;
  mode: string = '';

  constructor(private http: HttpClient,private userService: UserService) {
    this.userService.modeChange$?.subscribe(res=>{
      debugger;
      this.mode =  res;
    })
  }
  identify(index:number, item:Product){
    return item.productId; 
 }

  ngOnInit(): void {
    this.GetAllProduct();
  }

  GetAllProduct() {
    this.http.get("https://freeapi.gerasim.in/api/BigBasket/GetAllProducts").subscribe((res: any) => {
      this.ProductList = res.data;
      this.isLoader = false
    })
  }
  onSaveProduct() {
    debugger;
    if (this.isSaveApiCallInProgress == false) {
      this.isSaveApiCallInProgress = true;
      this.http.post("https://freeapi.gerasim.in/api/amazon/GetAllProducts", this.ProductObj).subscribe((res: any) => {
        if (res.result) {
          alert("User Created Success");
          this.GetAllProduct();
        } else {
          alert(res.message)
        }
        this.isSaveApiCallInProgress = false;
      })
    }
  }

  onDelete(id: number) {

    const isDelete = confirm("Are you sure want to delete");
    debugger;
    if (isDelete == true) {
      this.http.get("https://freeapi.gerasim.in/api/BigBasket/DeleteProductById?id=" + id).subscribe((res: any) => {
        if (res.result) {
          alert("Product Delete Success");
          this.GetAllProduct();
        } else {
          alert(res.message)
        }
      })
    }


  }

  // GetAllProducts() {
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  //     this.userList =  res;
  //   })
  // }
  // getAllQuestions() {
  //   this.http.get("https://freeapi.gerasim.in/api/Interview/GetAllQuestions").toPromise().then(
  //     res => { // Success
  //       debugger;

  //     }
  //   )
  // }
  // GetAllProduct2() {
  //   fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(res=>{
  //     debugger;
  //   })
  // }

}
