import { Component,Input } from '@angular/core';
import { Product } from '../../../core/model/class/User';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() Product: Product = new Product();
}
