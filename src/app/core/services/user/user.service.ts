
import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  modeChange$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private globalService: GlobalService) { }

  getAllUser() {
    return this.globalService.get("asdsd",)
  }
}
