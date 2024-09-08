import { Component } from '@angular/core';
import { GetProductComponent } from "../../additions/getProduct/get-product/get-product.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [GetProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


}
