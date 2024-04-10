import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIConstant } from '../../constant/constant';
import { APIResponseModel, ICustomer } from '../../model/interface/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomers(): Observable<APIResponseModel>{
   return this.http.get<APIResponseModel>(APIConstant.customer.GET_ALL_CUSTOMER);
  }
  updateCustomer(customer: ICustomer): Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>(APIConstant.customer.UPDATE_CUSTOMER, customer);
  }

}
