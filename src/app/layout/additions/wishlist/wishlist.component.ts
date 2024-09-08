import { WishlistService } from './../../../shared/servies/wishlist.service';
import { wishlist } from './../../../shared/interfaces/wishlist';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../../shared/servies/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss',
})
export class WishlistComponent {
  wishlist!: wishlist;
  constructor(
    private _WishlistService: WishlistService,
    private _CartService: CartService,
    private _ToastrService: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllWishlist();
  }
  getAllWishlist() {
    this._WishlistService.getwishlist().subscribe((res) => {
      this.wishlist = res;
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
  removeFromWishlist(product_id: string) {
    this._WishlistService.rmovefromwishlist(product_id).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message, res.status, {
          timeOut: 1500,
          progressBar: true,
          closeButton: true,
        });
        this.getAllWishlist();
      },
    });
  }
}
