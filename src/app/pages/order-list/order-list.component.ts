import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit {
  OrderList: any [] = [];
  ProductObj: any = {
      "SaleId": "",
      "CustId": "",
      "SaleDate": "",
      "TotalInvoiceAmount":" 0",
      "Discount": "",
      "PaymentNaration": "",
      "DeliveryAddress1": "",
      "DeliveryAddress2": "",
      "DeliveryCity": "",
      "DeliveryPinCode": "",
      "DeliveryLandMark": "",
      "IsCanceled": ""
   
    };

    OrderListObj: any[]=[];
  
    isLoader: boolean = true;
    isSaveApiCallInProgress: boolean = false;
    mode: string = '';
    constructor(private http: HttpClient,private userService: UserService) {
      this.userService.modeChange$?.subscribe(res=>{
        debugger;
        this.mode =  res;
      })
    }
  
    ngOnInit(): void {
       this.GetOrderList();
    }
  
    GetOrderList() {
      this.http.get("https://freeapi.gerasim.in/api/BigBasket/PlaceOrder").subscribe((res:any)=>{
        this.OrderList = res.data;
        this.isLoader = false
      })
    }
    onSaveOrder() {
      debugger;
      if(this.isSaveApiCallInProgress == false) {
        this.isSaveApiCallInProgress =  true;
        this.http.post("https://freeapi.gerasim.in/api/BigBasket/PlaceOrder",this.ProductObj).subscribe((res:any)=>{
          if(res.result) {
            alert("User Created Success");
            this.GetOrderList();
          } else {
            alert(res.message)
          }
          this.isSaveApiCallInProgress = false;
        })
      } 
    }
  
    onDelete(id: number) {
  
      const isDelete = confirm("Are you sure want to Cancel Order");
      debugger;
      if(isDelete == true) {
        this.http.get("https://freeapi.gerasim.in/api/BigBasket/cancelOrder?id="+ id).subscribe((res:any)=>{
          if(res.result) {
            alert("Cancel Order Success");
            this.GetOrderList();
          } else {
            alert(res.message)
          } 
        })
      }
  
     
    }
  
    // GetOrderLists() {
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
    // GetOrderList2() {
    //   fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(res=>{
    //     debugger;
    //   })
    // }
  
  }
  