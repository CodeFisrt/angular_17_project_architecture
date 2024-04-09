
import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private globalService: GlobalService) { }

  getAllUser(): obe {
    return this.globalService.get("asdsd",)
  }
}
