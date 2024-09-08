import { AthuService } from './../../../../shared/servies/athu.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../../../../shared/servies/order.service';
import { log } from 'console';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  cartid: string = '';
  paymentmothd!:string
  shipingDitiles: FormGroup = new FormGroup({
    detalis: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
  });
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _OrderService: OrderService,
    private _Router: Router,
  
  ) {
    this.cartid = this._ActivatedRoute.snapshot.params?.['id'];
  }
  onchange(e:any){
this.paymentmothd = e.target.value
  }
  continue() {
    if(this.paymentmothd =='cash'){
this._OrderService.cashOrder(this.shipingDitiles.value, this.cartid).subscribe({next:(res)=> {
  console.log("res");
  console.log(res);
  
  this._Router.navigate(['/allorders']);
  
},error:(err)=> {
console.log(err);

},});
    }
    else if (this.paymentmothd == 'visa') {
      this._OrderService.Checkout(this.shipingDitiles.value , this.cartid).subscribe(res=>{
        window.location.href = res.session.url
      })
    }
    
  }
}
