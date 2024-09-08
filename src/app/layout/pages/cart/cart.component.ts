import { ToastrService } from 'ngx-toastr';
import { rmoveitem } from './../../../shared/interfaces/cart';

import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { cart, Product, Products, showcart } from '../../../shared/interfaces/cart';
import { CartService } from '../../../shared/servies/cart.service';
import { isPlatformBrowser } from '@angular/common';
import { log } from 'node:console';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterLink , FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart: showcart = {} as showcart;
  numitem!:string
  msg!: string;
  constructor(
    private _CartService: CartService,
    @Inject(PLATFORM_ID) private platformid: object,
    private _ToastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getcart();
    if(isPlatformBrowser(this.platformid)){
localStorage.setItem('num',this.cart.numOfCartItems.toString())
this._CartService.cartItemNum.next(localStorage.getItem("num"))
    }
  }
  getcart() {
    this._CartService.showcart().subscribe((res) => {
      this.cart = res;
      this._CartService.cartItemNum.next(this.cart.numOfCartItems)
    });
  }
  rmoveitem(id: string) {
    this._CartService.deleteItem(id).subscribe((res) => {
      this._ToastrService.warning(res.status, '', {
        positionClass: 'toast-bottom-right',
      });
      this.cart = res;
      this._CartService.cartItemNum.next(this.cart.numOfCartItems);
    });
  }
  updata(id: string, count: number) {
    this._CartService.updataItem(id, `${count}`).subscribe((res) => {
      console.log(res);
      
      this._ToastrService.warning(res.status, '', {
        positionClass: 'toast-bottom-right',
      });
      this.cart = res;
      this._CartService.cartItemNum.next(this.cart.numOfCartItems);

    });
  }
  rmoveall() {
    this._CartService.deleteall().subscribe((res) => {
      this._ToastrService.error(res.message, '', {
        positionClass: 'toast-bottom-right',
      });
      console.log(res);
      this.getcart();
    });
  }
  edit(id:string ,numitem:string){
    this._CartService.updataItem(id, `${numitem}`).subscribe((res) => {
     numitem=this.numitem
this.cart =res
    })
  }
}
