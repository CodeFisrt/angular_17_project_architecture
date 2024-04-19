import { Component } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private userService: UserService) {

  }

  changeMode(mode: string) {
    debugger;
    this.userService.modeChange$?.next(mode);
  }

}
