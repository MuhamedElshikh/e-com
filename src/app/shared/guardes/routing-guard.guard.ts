import { CanActivateFn, Router } from '@angular/router';
import { AthuService } from '../servies/athu.service';
import { inject } from '@angular/core';

export const routingGuardGuard: CanActivateFn = (route, state) => {
  let _AthuService: AthuService = inject(AthuService)
  let _Router: Router = inject(Router);
  if(_AthuService.usertoken.getValue()!=null){
return true
  }
  _Router.navigate(["/login"])
  return false;
};
