
import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';
import { orderOfCategory } from '../../enum/enum';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private globalService: GlobalService) { }



  getAllUser(deviceType: number)  {
    if(deviceType == 1) {

    }
    if(deviceType == 2) {

    }
    return this.globalService.get("url")
  }

}
