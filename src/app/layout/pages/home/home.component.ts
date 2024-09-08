import { product } from './../../../shared/interfaces/prducts';
import { Component, OnInit } from '@angular/core';
import { FirstcarouselComponent } from "../../additions/firstcarousel/firstcarousel.component";
import { ScndcarouselComponent } from "../../additions/scndcarousel/scndcarousel.component";
import { ProductService } from '../../../shared/servies/product.service';
import { RouterLink } from '@angular/router';
import { FilterByNamePipe } from '../../../shared/pips/filter/filter-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../shared/servies/cart.service';
import { log } from 'console';
import { ToastrService } from 'ngx-toastr';
import { GetProductComponent } from "../../additions/getProduct/get-product/get-product.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FirstcarouselComponent,
    ScndcarouselComponent,
    RouterLink,
    FilterByNamePipe,
    FormsModule,
    GetProductComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {
  
}
