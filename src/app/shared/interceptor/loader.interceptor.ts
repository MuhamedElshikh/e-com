import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  let spiner = inject(NgxSpinnerService);
  spiner.show()
  return next(req).pipe(finalize(()=>{
    spiner.hide()
  }));
};
