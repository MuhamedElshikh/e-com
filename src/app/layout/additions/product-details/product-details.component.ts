import { Component, OnInit } from '@angular/core';
import { CarouselModule ,OwlOptions} from 'ngx-owl-carousel-o';
import { product, productdetails } from '../../../shared/interfaces/prducts';
import { ProductService } from '../../../shared/servies/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../shared/servies/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  id!: string;
  details!: productdetails;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };

  constructor(
    private _ProductService: ProductService,
    private _ActivatedRoute: ActivatedRoute,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {
    _ActivatedRoute.params.subscribe((res: any) => {
      this.id = res.id;
    });
  }
  ngOnInit(): void {
    this.getprudct();
  }
  getprudct() {
    this._ProductService.getoneproduct(this.id).subscribe((res) => {
      this.details = res;
    });
  }
  addToCart(id: string) {
    this._CartService.addToCart(id).subscribe(
      (res) => {
        this._ToastrService.success(res.message, '', {
          positionClass: 'toast-bottom-right',
        });
        this._CartService.cartItemNum.next(res.numOfCartItems);
      },
      (res) => {
        this._ToastrService.show(res.message);
      }
    );
  }
}
