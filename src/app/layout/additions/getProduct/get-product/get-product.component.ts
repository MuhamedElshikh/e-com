import { wishlist } from './../../../../shared/interfaces/wishlist';
import { WishlistService } from './../../../../shared/servies/wishlist.service';
import { Component } from '@angular/core';
import { ProductService } from '../../../../shared/servies/product.service';
import { CartService } from '../../../../shared/servies/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Metadata, product } from '../../../../shared/interfaces/prducts';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FilterByNamePipe } from '../../../../shared/pips/filter/filter-by-name.pipe';
import { NgClass } from '@angular/common';
import { IfStmt } from '@angular/compiler';
import { log } from 'console';

@Component({
  selector: 'app-get-product',
  standalone: true,
  imports: [RouterLink, FormsModule, FilterByNamePipe],
  templateUrl: './get-product.component.html',
  styleUrl: './get-product.component.scss',
})
export class GetProductComponent {
  searchKay: string = '';
  wishlist!: string[];
  idPrudcts!: string[];
  product!: product[];
  Metadata!: Metadata;
  currentPage: number = 1;
  totalPages: number = 0;
  pages: number[] = [];
  constructor(
    private _ProductService: ProductService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _WishlistService: WishlistService
  ) {}
  ngOnInit(): void {
    this.getAllProduct(this.currentPage);
    this.wishlistCheck()
  }
  getAllProduct(page: number) {
    this._ProductService.getallproduct(page).subscribe((res) => {
      this.product = res.data;
      this.totalPages = res.metadata.numberOfPages;
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
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
  loadPage(page: number) {
    this.currentPage = page;
    this.getAllProduct(this.currentPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  loadNextPage() {
    if (this.currentPage <= this.totalPages) {
      this.currentPage += 1;
      this.getAllProduct(this.currentPage);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      // console.log(this.currentPage);
    }
  }

  loadPrevPage() {
    if (this.currentPage >= this.totalPages) {
      this.currentPage -= 1;
      this.getAllProduct(this.currentPage);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
  //get wishlist IDs
  wishlistCheck() {
    this.wishlist= [];
    this._WishlistService.getwishlist().subscribe({
      next: (res) => {
        this.wishlist = res.data.map((item) => item._id);
        // console.log(this.wishlistArray);
      },
    });
  }

  //add to wishlist
  addToWishlist(product_id: string) {
    this._WishlistService.addtowishlist(product_id).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message, res.status, {
          timeOut: 1500,
          progressBar: true,
          closeButton: true,
        });
        this.wishlistCheck();
      },
    });
  }

  //remove from wishlist
  removeFromWishlist(product_id: string) {
    this._WishlistService.rmovefromwishlist(product_id).subscribe({
      next: (res) => {
        this._ToastrService.success(res.message, res.status, {
          timeOut: 1500,
          progressBar: true,
          closeButton: true,
        });
        this.wishlistCheck();
      },
    });
  }
}
