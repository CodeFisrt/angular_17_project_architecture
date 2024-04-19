import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent {
  @Input() headerColList: string [] = [];
  @Input() gridData: any [] = [];
}
