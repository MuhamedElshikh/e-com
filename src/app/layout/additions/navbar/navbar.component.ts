import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AthuService } from '../../../shared/servies/athu.service';
import { CartService } from '../../../shared/servies/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  islogin!: boolean;
  cartitemnum!:string
  constructor(
    public _AthuService: AthuService,
    private _CartService: CartService
  ) {}
  ngOnInit(): void {
    this._AthuService.usertoken.subscribe(() => {
      if (this._AthuService.usertoken.getValue() != null) {
        this.islogin = true;
      } else {
        this.islogin = false;
      }
    });
    this._CartService.cartItemNum.subscribe((v)=>{
this.cartitemnum = v
    })
    console.log(this.cartitemnum);
    
  }
}
