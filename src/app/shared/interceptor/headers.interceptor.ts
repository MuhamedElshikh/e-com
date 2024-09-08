import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const headersInterceptor: HttpInterceptorFn = (req, next) => {
if(typeof localStorage !='undefined' ){
req = req.clone({
    setHeaders: { token: localStorage.getItem('usertoken') || '' },
  });
}
  
  return next(req);
};
