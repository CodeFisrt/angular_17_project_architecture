import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIResponseModel, ICustomer } from '../../core/model/interface/Customer';
import { CustomerService } from '../../core/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'] 
})
export class CustomerComponent implements OnInit {
  customerList: ICustomer[] = [];
  selectedCustomer: ICustomer | null = null;

  constructor(private customerService: CustomerService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    this.customerService.getAllCustomers().subscribe(
      (res: APIResponseModel) => {
        this.customerList = res.data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onEdit(custId: any): void {
  }

  updateChanges(): void {
  }

  saveChanges():void{

  }

}
  

